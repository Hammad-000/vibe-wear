import React from 'react';

function About() {
  const values = [
    {
      id: 1,
      title: "SUSTAINABILITY",
      desc: "Our garments are made from 100% organic cotton and eco-friendly dyes. We drop limited collections to reduce waste."
    },
    {
      id: 2,
      title: "SUB-CULTURE",
      desc: "Inspired by underground music, skate culture, and cyber-punk ethics. We don't follow trends; we make statements."
    },
    {
      id: 3,
      title: "PREMIUM FIT",
      desc: "Every silhouette is custom engineered. Heavyweight fabrics, drop shoulders, and durable stitching that lasts a lifetime."
    }
  ];

  return (
    /* 🌟 FIX: Main body uses text-slate-900 for light mode and dark:text-white for dark mode seamlessly */
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950 dark:text-white pt-12">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-neutral-200 dark:border-white/5">
        {/* Glow effects that blend nicely in both themes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neutral-200/50 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-3xl mx-auto z-10 space-y-4 relative">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-neutral-900 dark:text-white">
            WE ARE <span className="bg-gradient-to-r from-neutral-800 via-neutral-600 to-stone-500 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">VIBEWEAR</span>
          </h1>
          <p className="text-neutral-500 dark:text-slate-400 text-base sm:text-lg font-light max-w-xl mx-auto">
            Born in the streets, engineered for the sub-culture. We bridge the gap between futuristic design and high-quality premium streetwear.
          </p>
        </div>
      </section>

      {/* 2. THE STORY SECTION (Two Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Aesthetic Visual Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-neutral-100 border border-neutral-200 dark:border-white/10 group shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800" 
              alt="Streetwear Culture" 
              className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:scale-102 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-8">
              <span className="text-xs font-black text-white dark:text-cyan-400 uppercase tracking-widest border-l-2 border-cyan-400 pl-3">
                Est. 2026 / Local Drop Movement
              </span>
            </div>
          </div>

          {/* Narrative Content Side */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">Our Manifest</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">BREAKING THE BOUNDARIES OF STANDARD CLOTHING.</h2>
            <p className="text-neutral-500 dark:text-slate-400 text-sm leading-relaxed">
              VibeWear started with a simple problem: the local fashion market was flooded with generic designs and low-grade fabrics. We wanted something heavy, bold, and expressive. 
            </p>
            <p className="text-neutral-500 dark:text-slate-400 text-sm leading-relaxed">
              We started crafting our own custom oversized patterns, sourcing premium bio-washed heavyweight cotton, and injecting cyber-street aesthetics into everyday apparel. VibeWear isn't just a clothing brand—it's a lifestyle for those who refuse to blend in.
            </p>
            
            {/* Short Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200 dark:border-white/5">
              <div>
                <p className="text-2xl font-black text-neutral-900 dark:text-white">50K+</p>
                <p className="text-[10px] text-neutral-400 dark:text-slate-500 uppercase tracking-wider">Drops Shipped</p>
              </div>
              <div>
                <p className="text-2xl font-black text-neutral-900 dark:text-cyan-400">100%</p>
                <p className="text-[10px] text-neutral-400 dark:text-slate-500 uppercase tracking-wider">Premium Cotton</p>
              </div>
              <div>
                <p className="text-2xl font-black text-neutral-900 dark:text-white">24/7</p>
                <p className="text-[10px] text-neutral-400 dark:text-slate-500 uppercase tracking-wider">Community Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="bg-white dark:bg-white/5 border-y border-neutral-200 dark:border-white/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">What We Stand For</h3>
            <p className="text-3xl font-black mt-1 text-neutral-900 dark:text-white">OUR CORE ETHICS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              /* 🌟 FIX: Soft white cards for light mode, trans-dark for dark mode */
              <div key={val.id} className="bg-white dark:bg-slate-950/40 border border-neutral-200 dark:border-white/5 p-8 rounded-2xl shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/30 transition duration-300 group">
                <div className="w-8 h-8 rounded-xl bg-neutral-950/10 text-neutral-900 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center font-black text-sm mb-6 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950 transition duration-300">
                  {val.id}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 tracking-wide uppercase">{val.title}</h4>
                <p className="text-neutral-500 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN THE TRIBE (Call to Action) */}
      <section className="max-w-4xl mx-auto text-center py-20 px-4 space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">BE PART OF THE MOVEMENT</h3>
        <p className="text-neutral-500 dark:text-slate-400 text-sm max-w-md mx-auto">
          Follow our style drops and behind-the-scenes engineering process on Instagram.
        </p>
        <div className="pt-2">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            /* 🌟 FIX: Dynamic adaptive colors for CTA button */
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white dark:bg-white dark:text-slate-950 font-bold rounded-xl hover:bg-neutral-800 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition transform active:scale-95 text-sm cursor-pointer shadow-md"
          >
            <span>FOLLOW @VIBEWEAR</span>
            <span>📸</span>
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;