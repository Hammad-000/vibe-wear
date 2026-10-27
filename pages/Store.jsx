import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductFilters from '../components/ProductFilters';
import ProductCard from '../components/ProductCard';

function HazardStripe({ className = '' }) {
  return (
    <div
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(-45deg, #FF3D1A 0, #FF3D1A 10px, transparent 10px, transparent 20px)',
      }}
    />
  );
}

function Store({ cartItems, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('DEFAULT');
  const STORE_PRODUCT_URL = import.meta.env.VITE_STORE_PRODUCT_URL;

  const navigate = useNavigate();

  useEffect(() => {
    if (!STORE_PRODUCT_URL) {
      console.error('VITE_PRODUCT_URL not defined ');
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
        console.error('Something is not working:', err);
        setLoading(false);
      });
  }, [STORE_PRODUCT_URL]);

  const filteredProducts = useProductFilters(products, {
    search,
    selectedCategory,
    minRating,
    sortBy,
  });

  const totalCartCount = Object.values(cartItems || {}).reduce((sum, qty) => sum + qty, 0);

  if (!STORE_PRODUCT_URL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EDE9E1] dark:bg-[#141210]">
        <div className="text-center py-10 px-8 border-2 border-[#FF3D1A]">
          <p className="font-mono text-xs uppercase tracking-widest text-[#FF3D1A]">Config error</p>
          <p className="font-bold mt-2 text-[#16140F] dark:text-[#EDE9E1]">
            VITE_STORE_PRODUCT_URL is missing in .env file
          </p>
        </div>
      </div>
    );
  }

  const categories = ['All', 'Hoodies', 'Tees', 'Pants', 'Shoes', 'Accessories'];

  return (
    <div className="min-h-screen bg-[#EDE9E1] text-[#16140F] dark:bg-[#141210] dark:text-[#EDE9E1] transition-colors duration-300">
      <HazardStripe />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">

        {/* HEADER BAR */}
        <div className="mb-10 border-b-2 border-[#16140F] dark:border-[#EDE9E1] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-[11px] px-2 py-1 border border-[#16140F] dark:border-[#EDE9E1] inline-block -rotate-2 mb-3">
              FULL CATALOG
            </span>
            <h1 className="font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl">
              The drop<span className="text-[#FF3D1A]">.</span>
            </h1>
            <p className="font-mono text-xs text-[#6E6B4E] dark:text-[#C9C3B6] mt-2 uppercase tracking-wide">
              {loading ? 'Loading…' : `${filteredProducts.length} items in stock`}
            </p>
          </div>

          {totalCartCount > 0 && (
            <div className="font-mono text-xs px-4 py-2 border-2 border-[#16140F] dark:border-[#EDE9E1] uppercase tracking-wider">
              Bag <span className="text-[#FF3D1A] font-bold">[{totalCartCount}]</span>
            </div>
          )}
        </div>

        {/* CORE STORE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ASIDE SIDEBAR FILTERS */}
          <aside className="lg:col-span-3 space-y-7 lg:sticky lg:top-10">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6E6B4E] dark:text-[#C9C3B6] mb-2">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keywords…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2.5 bg-transparent border border-[#16140F] dark:border-[#EDE9E1] text-sm focus:outline-none focus:border-[#FF3D1A] dark:focus:border-[#FF3D1A] transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-2.5 text-xs text-[#6E6B4E] dark:text-[#C9C3B6] hover:text-[#FF3D1A]"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="h-px bg-[#C9C3B6] dark:bg-[#44412F]" />

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6E6B4E] dark:text-[#C9C3B6] mb-2">
                Sort
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 bg-transparent border border-[#16140F] dark:border-[#EDE9E1] text-sm focus:outline-none focus:border-[#FF3D1A] transition-colors cursor-pointer"
              >
                <option value="DEFAULT">Default arrivals</option>
                <option value="PRICE_LOW">Price: low to high</option>
                <option value="PRICE_HIGH">Price: high to low</option>
                <option value="RATING">Highest rated</option>
              </select>
            </div>

            <div className="h-px bg-[#C9C3B6] dark:bg-[#44412F]" />

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6E6B4E] dark:text-[#C9C3B6] mb-2">
                Category
              </h3>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const active = selectedCategory.toLowerCase() === cat.toLowerCase();
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full cursor-pointer text-left px-3 py-2 text-sm font-medium transition-colors flex justify-between items-center ${
                        active
                          ? 'bg-[#16140F] text-[#EDE9E1] dark:bg-[#FF3D1A] dark:text-[#16140F] font-bold'
                          : 'text-[#44412F] dark:text-[#C9C3B6] hover:bg-[#16140F]/5 dark:hover:bg-[#EDE9E1]/5'
                      }`}
                    >
                      <span>{cat}</span>
                      {active && <span className="text-[10px]">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-[#C9C3B6] dark:bg-[#44412F]" />

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6E6B4E] dark:text-[#C9C3B6] mb-2">
                Min. rating
              </h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setMinRating(minRating === star ? 0 : star)}
                    className={`text-lg leading-none transition-colors ${
                      star <= minRating ? 'text-[#FF3D1A]' : 'text-[#C9C3B6] dark:text-[#44412F]'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN PRODUCT GRID */}
          <main className="lg:col-span-9">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-[4/5] bg-[#C9C3B6]/30 dark:bg-[#44412F]/30 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-24 border-2 border-dashed border-[#C9C3B6] dark:border-[#44412F]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF3D1A]">
                  No drops found
                </span>
                <h3 className="font-black text-xl uppercase mt-3">Empty rack</h3>
                <p className="text-sm text-[#6E6B4E] dark:text-[#C9C3B6] mt-1">
                  Try resetting the filters on the left.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="cursor-pointer"
                  >
                    <ProductCard
                      product={product}
                      currentQty={cartItems?.[product.id] || 0}
                      onAddToCart={onAddToCart}
                    />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Store;