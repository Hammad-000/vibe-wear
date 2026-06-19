import React, { useState,useEffect } from 'react';

function Home() {

const [pro, setPro] = useState([]);
const [loading, setLoading] = useState(true);
const prod = "/env/products_"
const API_PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL;



useEffect(() => {
    fetch(API_PRODUCT_URL) 
      .then((res) => res.json())
      .then((json) => {
        setPro(json);     
        setLoading(false);  
      })
      .catch((err) => {
        console.error("some thing is not working:", err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 min-h-screen text-white antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto text-center z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest animate-bounce">
            Drop 01 / Cyber Streetwear Available Now
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight">
            OWN YOUR STYLE.<br />
            MATCH YOUR <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">VIBE.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Premium oversized drops, heavy-weight cotton blends, and futuristic fits designed for the sub-culture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-sm tracking-wide">
              SHOP COLLECTION 🛍️
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-sm tracking-wide">
              LOOKBOOK '26
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Shop by Vibe</h2>
          <p className="text-3xl font-black mt-1">THE ESSENTIALS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group rounded-2xl overflow-hidden aspect-video md:aspect-square bg-slate-900 border border-white/10 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" alt="Hoodies" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold">Oversized Hoodies</h3>
                <p className="text-cyan-400 text-sm font-medium mt-1 group-hover:underline">Explore Drop →</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden aspect-video md:aspect-square bg-slate-900 border border-white/10 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600" alt="Tees" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold">Graphic Tees</h3>
                <p className="text-cyan-400 text-sm font-medium mt-1 group-hover:underline">Explore Drop →</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden aspect-video md:aspect-square bg-slate-900 border border-white/10 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" alt="Bottoms" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold">Cargo & Pants</h3>
                <p className="text-cyan-400 text-sm font-medium mt-1 group-hover:underline">Explore Drop →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DROPS (API PRODUCTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Live Drops</h2>
            <p className="text-3xl font-black mt-1">NEW SEASON HIGHLIGHTS</p>
          </div>
          <button className="self-center md:self-auto text-sm font-bold text-cyan-400 hover:text-cyan-300 border-b border-cyan-400/30 pb-1 transition cursor-pointer">
            View All Products
          </button>
        </div>

        {/* Loading State Animation */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm tracking-wider animate-pulse">FETCHING VIBE PRODUCTS...</p>
          </div>
        ) : (
          /* Products Grid mapped from API data state */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pro.map((product) => (
              <div key={product.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col group">
                <div className="aspect-[4/5] bg-slate-900 relative overflow-hidden">
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border border-cyan-400/20 z-10">
                    {product.category?.name || "Drop"}
                  </span>
                  {/* API image handling with a fallback fallback overlay */}
                  <img 
                    src={product.images && product.images[0] ? product.images[0] : "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"; // Broken link handling
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base text-slate-100 line-clamp-1 group-hover:text-cyan-400 transition">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white font-bold text-lg">${product.price}</span>
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer active:scale-95">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. BRAND VALUE PROP (FEATURES) */}
      <section className="bg-white/5 border-y border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl">🚀</div>
            <h4 className="font-bold text-base">Free & Fast Delivery</h4>
            <p className="text-xs text-slate-400">All across Pakistan on orders above Rs 3,000</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🛡️</div>
            <h4 className="font-bold text-base">Premium Quality Guarantee</h4>
            <p className="text-xs text-slate-400">100% combed cotton, bio-washed fabrics only</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🔄</div>
            <h4 className="font-bold text-base">Easy Exchange Policy</h4>
            <p className="text-xs text-slate-400">7-day hassle-free size change and returns</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;