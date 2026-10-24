import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowUpRight, Heart, Truck, ShieldCheck, RotateCcw } from 'lucide-react';


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

function Home() {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL;

  useEffect(() => {
    if (!API_PRODUCT_URL) {
      console.error('VITE_PRODUCT_URL defined nahi hai aapki .env file mein!');
      return;
    }

    fetch(API_PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        setPro(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Something is not working:', err);
        setLoading(false);
      });
  }, [API_PRODUCT_URL]);

  return (
    <div className="min-h-screen bg-[#EDE9E1] text-[#16140F] dark:bg-[#141210] dark:text-[#EDE9E1] transition-colors duration-300">

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b-2 border-[#16140F] dark:border-[#EDE9E1]">
        <HazardStripe />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 py-16 sm:py-24">

          {/* left: copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-8 self-start">
              <span className="font-mono text-[11px] px-2 py-1 border border-[#16140F] dark:border-[#EDE9E1] -rotate-2">
                DROP N&deg; 01
              </span>
              <span className="font-mono text-[11px] text-[#6E6B4E] dark:text-[#C9C3B6]">
                Karachi — restock weekly
              </span>
            </div>

            <h1 className="font-black uppercase leading-[0.9] tracking-tight text-[15vw] sm:text-7xl lg:text-8xl">
              Heavy
              <br />
              cotton.
              <br />
              <span className="text-[#FF3D1A]">No noise.</span>
            </h1>

            <p className="mt-8 max-w-md text-[#44412F] dark:text-[#C9C3B6] text-base sm:text-lg leading-relaxed">
              Oversized fits and bio-washed fabric, built for the street, not the
              studio shoot. One drop at a time, nothing held in reserve.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="inline-flex items-center gap-2 px-7 py-4 bg-[#16140F] text-[#EDE9E1] dark:bg-[#FF3D1A] dark:text-[#16140F] font-bold uppercase text-sm tracking-wide hover:-translate-y-0.5 active:translate-y-0 transition-transform">
                Shop the drop
                <ShoppingBag className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-1 px-1 py-4 font-bold uppercase text-sm tracking-wide border-b-2 border-[#16140F] dark:border-[#EDE9E1] hover:border-[#FF3D1A] hover:text-[#FF3D1A] transition-colors">
                Lookbook '26
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* right: stamped image block */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#16140F] dark:border-[#FF3D1A]" />
            <div className="relative aspect-[4/5] bg-[#16140F] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"
                alt="Oversized hoodie, current drop"
                className="w-full h-full object-cover opacity-90"
              />
              <span className="absolute bottom-4 left-4 bg-[#EDE9E1] text-[#16140F] font-mono text-[11px] px-2 py-1">
                NO. 2026 / HOODIE-BLK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES — asymmetric, not three equal cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-baseline justify-between mb-10 border-b border-[#C9C3B6] dark:border-[#44412F] pb-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Shop by category</h2>
          <span className="font-mono text-xs text-[#6E6B4E] dark:text-[#C9C3B6]">03 collections</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {[
            { title: 'Oversized Hoodies', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700', span: 'md:col-span-3 aspect-[16/10]' },
            { title: 'Graphic Tees', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700', span: 'md:col-span-2 aspect-[4/5]' },
            { title: 'Cargo & Pants', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700', span: 'md:col-span-2 aspect-[4/5]' },
          ].map((cat, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer bg-[#16140F] ${cat.span} ${i === 0 ? 'md:row-span-1' : ''}`}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-end justify-between p-6">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#EDE9E1] tracking-tight">
                  {cat.title}
                </h3>
                <ArrowUpRight className="w-6 h-6 text-[#EDE9E1] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <HazardStripe className="opacity-80" />

      {/* 3. LIVE DROPS (API PRODUCTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10 border-b border-[#C9C3B6] dark:border-[#44412F] pb-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">New season highlights</h2>
          <button className="font-mono text-xs underline underline-offset-4 decoration-[#FF3D1A] hover:text-[#FF3D1A] transition-colors">
            view all products
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="animate-pulse space-y-3">
                <div className="aspect-[4/5] bg-[#C9C3B6]/40 dark:bg-[#44412F]/40" />
                <div className="h-3 bg-[#C9C3B6]/40 dark:bg-[#44412F]/40 w-2/3" />
                <div className="h-3 bg-[#C9C3B6]/40 dark:bg-[#44412F]/40 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pro.slice(0, 20).map((product, idx) => (
              <div
                key={product.id}
                className="group bg-transparent cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-[#16140F]/5 dark:bg-[#EDE9E1]/5 overflow-hidden border border-[#C9C3B6] dark:border-[#44412F]">
                  <span className="absolute top-3 left-3 z-10 bg-[#EDE9E1] dark:bg-[#16140F] font-mono text-[10px] px-2 py-1 border border-[#16140F] dark:border-[#EDE9E1]">
                    {String(idx + 1).padStart(2, '0')} / {product.category?.name?.toUpperCase() || 'DROP'}
                  </span>
                  <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-[#EDE9E1]/90 dark:bg-[#16140F]/90 border border-[#16140F] dark:border-[#EDE9E1] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FF3D1A] hover:text-[#EDE9E1] hover:border-[#FF3D1A]">
                    <Heart className="w-4 h-4" />
                  </button>
                  <img
                    src={product.images && product.images[0] ? product.images[0] : 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500'}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500';
                    }}
                  />
                </div>

                <div className="pt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm leading-snug line-clamp-1 group-hover:text-[#FF3D1A] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#6E6B4E] dark:text-[#C9C3B6] mt-1 line-clamp-2 leading-relaxed">
                      {product.description || 'No description provided for this streetwear piece.'}
                    </p>
                  </div>
                  {product.price != null && (
                    <span className="shrink-0 font-mono text-sm font-bold">
                      Rs {Number(product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. BRAND VALUE PROPS — ticket-style, divided by dashed rule */}
      <section className="border-t-2 border-[#16140F] dark:border-[#EDE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-[#C9C3B6] dark:divide-[#44412F]">
          {[
            { icon: Truck, title: 'Free & fast delivery', body: 'All across Pakistan on orders above Rs 3,000' },
            { icon: ShieldCheck, title: 'Premium quality, guaranteed', body: '100% combed cotton, bio-washed fabrics' },
            { icon: RotateCcw, title: 'Easy exchanges', body: '7-day hassle-free size changes and returns' },
          ].map((item, i) => (
            <div key={i} className="py-8 sm:py-0 sm:px-8 first:pl-0 last:pr-0 flex items-start gap-4">
              <item.icon className="w-5 h-5 mt-0.5 shrink-0 text-[#FF3D1A]" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-[#6E6B4E] dark:text-[#C9C3B6] mt-1.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;