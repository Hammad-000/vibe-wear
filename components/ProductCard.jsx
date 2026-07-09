import React from "react";

function ProductCard({ product, currentQty = 0, onAddToCart }) {
  const displayImage =
    product.images?.[0] ||
    product.img ||
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500";

  const displayTitle = product.name || product.title || "No Title Available";
  const displayCategory = product.category?.name || product.category || "Apparel";

  return (
    <div className="w-full bg-white dark:bg-slate-900/50 border border-neutral-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 dark:hover:border-cyan-500/30 transition-all duration-300 group flex flex-col h-full">

      {/* IMAGE CONTAINER WITH GRADIENT OVERLAY */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-50 dark:bg-slate-950 flex-shrink-0">
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-neutral-900 dark:text-neutral-200 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-neutral-200/20 dark:border-white/5">
          {displayCategory}
        </span>
        
        {/* Hover Product Badge inside the card boundary */}
        {currentQty > 0 && (
          <span className="absolute top-3 right-3 bg-cyan-500 text-slate-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-transform scale-100">
            {currentQty}
          </span>
        )}
      </div>

      {/* COMPACT DETAILS BLOCK */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div className="space-y-1">
          <div className="flex justify-between items-start gap-3">
            <h3 className="font-semibold text-sm sm:text-base line-clamp-2 uppercase tracking-tight text-neutral-800 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
              {displayTitle}
            </h3>
            <span className="font-black text-sm sm:text-base whitespace-nowrap text-neutral-900 dark:text-cyan-400">
              Rs {product.price || 0}
            </span>
          </div>
          
          <div className="flex text-amber-400 text-xs tracking-tighter">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="mr-0.5">
                {i < (product.rating || 5) ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>

        {/* INTERACTIVE ACTIONS */}
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
          <span className="text-[11px] text-neutral-400 dark:text-slate-400 font-medium tracking-wide">
            {currentQty > 0 ? `${currentQty} added to bag` : "In stock"}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onAddToCart(product); // Triggering parent level handler
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold uppercase rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-slate-950 hover:bg-neutral-800 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span>{currentQty > 0 ? "Add More" : "Add to Bag"}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;