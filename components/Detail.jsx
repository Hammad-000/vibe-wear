import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const STORE_PRODUCT_URL = import.meta.env.VITE_STORE_PRODUCT_URL;

  useEffect(() => {
    if (!STORE_PRODUCT_URL) {
      console.error("VITE_STORE_PRODUCT_URL is missing!");
      setLoading(false);
      return;
    }

    fetch(STORE_PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        const data = Array.isArray(json) ? json : json.products || [];
        const foundProduct = data.find((item) => String(item.id) === String(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching detail:", err);
        setLoading(false);
      });
  }, [id, STORE_PRODUCT_URL]);

  if (loading) {
    return <div className="text-center py-20 text-white">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-bold mb-4">Product not found!</p>
        <Link to="/home" className="text-cyan-400 underline text-sm">Go back to Store</Link>
      </div>
    );
  }

  // Image handling
  const productImage = product.image || product.img || product.thumbnail || product.images?.[0];

  // Category handling (Safe check agar object ho)
  const categoryName = typeof product.category === 'object' && product.category !== null 
    ? product.category.name 
    : product.category;

  // Title / Name safe extraction (Agar title ya name object nikle toh crash hone se bachane ke liye)
  const getDisplayTitle = () => {
    const rawTitle = product.title || product.name;
    if (typeof rawTitle === 'string') return rawTitle;
    if (typeof rawTitle === 'object' && rawTitle !== null) {
      return rawTitle.name || rawTitle.title || JSON.stringify(rawTitle);
    }
    return "Exclusive Product";
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 max-w-7xl mx-auto text-white">
      <Link to="/home" className="inline-block mb-6 text-xs text-cyan-400 hover:underline uppercase tracking-widest">
        ← Back to Vault
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl backdrop-blur-md">
        
        {/* Product Image Section */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
          {productImage ? (
            <img 
              src={productImage} 
              alt="Product" 
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-slate-500 text-xs uppercase tracking-widest">No Image Available</span>
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              {categoryName || "Exclusive Drop"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mt-4 tracking-tight">
              {getDisplayTitle()}
            </h1>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              {product.description || "No description provided for this specific sub-culture piece."}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase block">Price</span>
              <span className="text-3xl font-black text-cyan-400">${product.price}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Detail;