import React, { useState } from "react";

function ProductCard({ product }) {
  const displayImage =
    product.images?.[0] ||
    product.img ||
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500";

  const displayTitle = product.name || product.title || "No Title Available";
  const displayCategory = product.category?.name || product.category || "Apparel";

  const [cart, setCart] = useState(0);

  return (
    <div className="w-full bg-white dark:bg-slate-950/40 border border-neutral-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/30 transition-all duration-300 group">

      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-slate-900">
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500";
          }}
        />

        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-neutral-900 text-white text-[8px] sm:text-[10px] px-2 py-1 rounded uppercase tracking-wider">
          {displayCategory}
        </span>
      </div>

      {/* DETAILS */}
      <div className="p-3 sm:p-4 md:p-5">

        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-xs sm:text-sm md:text-base line-clamp-2 uppercase text-neutral-900 dark:text-white">
            {displayTitle}
          </h3>

          <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap text-neutral-900 dark:text-cyan-400">
            Rs {product.price || 0}
          </span>
        </div>

        <div className="mt-3 flex justify-between items-center border-t border-neutral-100 dark:border-white/5 pt-3">

          {/* Rating */}
          <div className="flex text-yellow-400 text-xs sm:text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < (product.rating || 5) ? "★" : "☆"}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              console.log("add");
              setCart(cart + 1);
            }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-slate-950 hover:bg-neutral-800 dark:hover:bg-cyan-400 transition"
          >
            + ADD
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;