import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Heart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Loader2,
  Sparkles
} from 'lucide-react';

function Home() {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const API_PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL;

  useEffect(() => {
    if (!API_PRODUCT_URL) {
      console.error("VITE_PRODUCT_URL defined nahi hai aapki .env file mein!");
      return;
    }

    fetch(API_PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        setPro(json);    
        setLoading(false);  
      })
      .catch((err) => {
        console.error("Something is not working:", err);
        setLoading(false);
      });
  }, [API_PRODUCT_URL]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white selection:bg-cyan-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
        {/* Futuristic Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        
        {/* Premium Ambient Blurs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-neutral-200/40 dark:bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-stone-200/40 dark:bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto text-center z-10 space-y-8 px-2">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 dark:bg-cyan-500/10 dark:text-cyan-400 border border-neutral-300/60 dark:border-cyan-500/20 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-spin-slow" />
            Drop 01 / Cyber Streetwear Available Now
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05] text-neutral-950 dark:text-white">
            OWN YOUR STYLE.<br />
            MATCH YOUR <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-stone-600 dark:from-cyan-400 dark:via-teal-400 dark:to-indigo-400 bg-clip-text text-transparent">VIBE.</span>
          </h1>
          
          <p className="text-neutral-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Premium oversized drops, heavy-weight cotton blends, and futuristic fits designed for the sub-culture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 font-black rounded-xl shadow-xl shadow-neutral-950/10 dark:shadow-cyan-400/10 hover:bg-neutral-800 dark:hover:bg-cyan-300 transition-all transform hover:-translate-y-0.5 active:scale-98 cursor-pointer text-sm tracking-widest uppercase">
              <span>SHOP COLLECTION</span>
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-neutral-50 text-neutral-800 dark:bg-white/5 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-300 dark:border-white/10 font-bold rounded-xl transition-all transform hover:-translate-y-0.5 active:scale-98 cursor-pointer text-sm tracking-widest uppercase">
              LOOKBOOK '26
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-200 dark:border-white/5">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xs font-black text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">Shop by Vibe</h2>
          <p className="text-3xl sm:text-4xl font-black mt-2 text-neutral-950 dark:text-white tracking-tight">THE ESSENTIALS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Oversized Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" },
            { title: "Graphic Tees", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600" },
            { title: "Cargo & Pants", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" }
          ].map((cat, i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden aspect-[4/3] md:aspect-square bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-neutral-950/20 dark:bg-neutral-950/40 z-10 group-hover:bg-neutral-950/30 transition-colors"></div>
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex items-end p-8 z-20">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{cat.title}</h3>
                    <p className="text-neutral-300 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mt-1">Explore Drop</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-cyan-400 text-neutral-950 flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED DROPS (API PRODUCTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xs font-black text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">Live Drops</h2>
            <p className="text-3xl sm:text-4xl font-black mt-2 text-neutral-950 dark:text-white tracking-tight">NEW SEASON HIGHLIGHTS</p>
          </div>
          <button className="self-center sm:self-auto inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-neutral-800 dark:text-cyan-400 hover:text-neutral-600 dark:hover:text-cyan-300 border-b-2 border-neutral-800 dark:border-cyan-400 pb-1 transition cursor-pointer">
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {loading ? (
          /* Premium Skeleton Loader */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="animate-pulse space-y-4">
                <div className="aspect-[4/5] bg-neutral-200 dark:bg-white/5 rounded-2xl"></div>
                <div className="h-4 bg-neutral-200 dark:bg-white/5 rounded w-2/3"></div>
                <div className="h-3 bg-neutral-200 dark:bg-white/5 rounded w-1/2"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-5 bg-neutral-200 dark:bg-white/5 rounded w-1/4"></div>
                  <div className="h-8 bg-neutral-200 dark:bg-white/5 rounded-xl w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pro.slice(0,20).map((product) => (
              <div key={product.id} className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-neutral-950 dark:hover:border-cyan-400/50 transition-all duration-500 flex flex-col group relative">
                
                {/* Wishlist Button Overlay */}
                <button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 active:scale-90 hover:bg-neutral-900 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-neutral-950">
                  <Heart className="w-4 h-4" />
                </button>

                <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-900/50 relative overflow-hidden">
                  <span className="absolute top-3 left-3 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-neutral-950 text-[9px] font-black tracking-widest px-2.5 py-1 rounded-md uppercase z-10 shadow-sm">
                    {product.category?.name || "Drop"}
                  </span>
                  <img 
                    src={product.images && product.images[0] ? product.images[0] : "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"; 
                    }}
                  />
                </div>
                
                <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base text-neutral-950 dark:text-slate-100 line-clamp-1 group-hover:text-neutral-700 dark:group-hover:text-cyan-400 transition duration-300">
                      {product.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description || "No description provided for this streetwear piece."}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-neutral-950 dark:text-white font-black text-xl tracking-tight">Rs {product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. BRAND VALUE PROP (FEATURES) */}
      <section className="bg-white dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/10 py-16 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 text-neutral-950 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-sm transform group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-neutral-950 transition duration-300">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-black text-sm uppercase tracking-wider text-neutral-950 dark:text-white">Free & Fast Delivery</h4>
            <p className="text-xs text-neutral-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">All across Pakistan on orders above Rs 3,000</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 text-neutral-950 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-sm transform group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-neutral-950 transition duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-black text-sm uppercase tracking-wider text-neutral-950 dark:text-white">Premium Quality Guarantee</h4>
            <p className="text-xs text-neutral-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">100% combed cotton, bio-washed premium fabrics</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 text-neutral-950 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-sm transform group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-neutral-950 transition duration-300">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="font-black text-sm uppercase tracking-wider text-neutral-950 dark:text-white">Easy Exchange Policy</h4>
            <p className="text-xs text-neutral-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">7-day hassle-free size changes and quick returns</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;