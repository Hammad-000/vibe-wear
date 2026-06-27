import React, { useState, useEffect } from 'react';
import useProductFilters from '../components/ProductFilters';
import ProductCard from '../components/ProductCard'; 

function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('DEFAULT');
  const STORE_PRODUCT_URL = import.meta.env.VITE_STORE_PRODUCT_URL;

  useEffect(() => {
    if (!STORE_PRODUCT_URL) {
      console.error("VITE_PRODUCT_URL defined nahi hai aapki .env file mein!");
      setLoading(false);
      return;
    }

    fetch(STORE_PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        const data = Array.isArray(json) ? json : json.products || [];
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Something is not working:", err);
        setLoading(false);
      });
  }, [STORE_PRODUCT_URL]);

  const filteredProducts = useProductFilters(products, {
    search,
    selectedCategory,
    minRating,
    sortBy
  });

  if (!STORE_PRODUCT_URL) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Error: VITE_STORE_PRODUCT_URL is missing in .env file!
      </div>
    );
  }

  const categories = ['All', 'Hoodies', 'Tees', 'Pants', 'Shoes', 'Accessories'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950 dark:text-white transition-colors duration-300 pt-24 pb-16 px-4 sm:px-6 lg:px-8">

      {/* HEADER BAR */}
      <div className="max-w-7xl mx-auto mb-10 border-b border-neutral-200 dark:border-white/5 pb-6">
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          THE DROP <span className="text-neutral-400 dark:text-cyan-400">/ ALL ITEMS</span>
        </h1>
        <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1 uppercase tracking-widest">
          {loading ? "Loading live data stream..." : `Showing ${filteredProducts.length} results from sub-culture vault`}
        </p>
      </div>

      {/* CORE STORE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ================= ASIDE SIDEBAR FILTERS ================= */}
        <aside className="lg:col-span-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-6 rounded-2xl space-y-6 shadow-sm sticky top-28">
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white mb-3">Search Drop</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Type keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-neutral-200 dark:border-white/10 text-xs focus:outline-none focus:border-neutral-900 dark:focus:border-cyan-500 transition-colors"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-2.5 text-xs opacity-50 hover:opacity-100">✕</button>
              )}
            </div>
          </div>

          <hr className="border-neutral-100 dark:border-white/5" />

          {/* SORT MECHANISM */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white mb-3">Sort Content</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-neutral-200 dark:border-white/10 text-xs focus:outline-none focus:border-neutral-900 dark:focus:border-cyan-500 transition-colors cursor-pointer"
            >
              <option value="DEFAULT">DEFAULT ARRIVALS</option>
              <option value="PRICE_LOW">PRICE: LOW TO HIGH</option>
              <option value="PRICE_HIGH">PRICE: HIGH TO LOW</option>
              <option value="RATING">HIGHEST RATED</option>
            </select>
          </div>

          <hr className="border-neutral-100 dark:border-white/5" />

          {/* CATEGORY SELECTOR */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white mb-3">Garment Silhouette</h3>
            <div className="space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full cursor-pointer text-left px-3 py-2 rounded-lg text-xs font-medium uppercase tracking-wide transition-all flex justify-between items-center ${selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-neutral-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold'
                    : 'text-neutral-500 dark:text-slate-400 hover:bg-neutral-100 dark:hover:bg-white/5'
                    }`}
                >
                  <span>{cat}</span>
                  {selectedCategory.toLowerCase() === cat.toLowerCase() && <span className=" p-1 text-[9px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-neutral-100 dark:border-white/5" />

          {/* RATING FILTER */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white mb-3">Minimum Tier Review</h3>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setMinRating(minRating === star ? 0 : star)}
                  className={`text-lg p-1.5 rounded-lg transition-colors ${star <= minRating ? 'text-amber-400 bg-amber-500/5' : 'text-neutral-300 dark:text-slate-700'
                    }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= MAIN PRODUCT VISUAL MATRIX ================= */}
        <main className="lg:col-span-9">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border border-neutral-200 dark:border-white/5 rounded-2xl aspect-[4/5] bg-neutral-200/50 dark:bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-white/5 rounded-3xl border border-dashed border-neutral-200 dark:border-white/10">
              <span className="text-3xl">📭</span>
              <h3 className="text-base font-black mt-3 uppercase tracking-wider">No Drops Found</h3>
              <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">Try resetting your aside matrix parameters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}

export default Store;