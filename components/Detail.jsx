import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const STORE_PRODUCT_URL = import.meta.env.VITE_STORE_PRODUCT_URL;

  useEffect(() => {
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

  if (loading) return <div className="text-center py-20">Loading product details...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Product not found!</div>;

  return (
    <div className="min-h-screen pt-28 px-4 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold">{product.title || product.name}</h1>
      <p className="mt-4 text-slate-400">{product.description}</p>
      <p className="mt-4 text-xl font-black text-cyan-400">${product.price}</p>
    </div>
  );
}

export default Detail;