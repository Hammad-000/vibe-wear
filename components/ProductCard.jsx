import React from 'react';

function ProductCard({ product }) {
  // Fallbacks फ़ॉर सेफ डेटा रेंडरिंग
  const displayImage = product.images?.[0] || product.img || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500";
  const displayTitle = product.name || product.title || "No Title Available";
  const displayCategory = product.category?.name || product.category || "Apparel";

  return (
    <div className="bg-white dark:bg-slate-950/40 border border-neutral-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/30 transition-all duration-300 group">
      
      {/* IMAGE FRAME */}
      <div className="aspect-[4/5] bg-neutral-100 dark:bg-slate-900 relative overflow-hidden">
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"; }}
        />
        <span className="absolute top-3 left-3 bg-neutral-900/90 text-white dark:bg-slate-950/80 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase border border-white/10">
          {displayCategory}
        </span>
      </div>

      {/* DETAILS CARD */}
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-black text-sm tracking-tight text-neutral-900 dark:text-white line-clamp-2 uppercase">
            {displayTitle}
          </h3>
          <span className="font-black text-sm text-neutral-900 dark:text-cyan-400">
            ${product.price || 0}
          </span>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-neutral-100 dark:border-white/5">
          {/* STAR SCORE SYSTEM */}
          <div className="flex text-amber-400 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < (product.rating || 5) ? '★' : '☆'}</span>
            ))}
          </div>
          
          <button className="text-[10px] font-black tracking-widest uppercase py-1.5 px-3 bg-neutral-950 text-white dark:bg-white dark:text-slate-950 rounded-lg hover:bg-neutral-800 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-colors cursor-pointer">
            + ADD
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;