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
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white pt-12 selection:bg-cyan-500 selection:text-black">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-neutral-200 dark:border-white/5">
        {/* Ambient Tech Grid Grid Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neutral-200/40 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        
        <div className="max-w-3xl mx-auto z-10 space-y-6 relative px-2">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase text-neutral-950 dark:text-white leading-none">
            WE ARE <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-stone-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">VIBEWEAR</span>
          </h1>
          <p className="text-neutral-600 dark:text-slate-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Born in the streets, engineered for the sub-culture. We bridge the gap between futuristic design and high-quality premium streetwear.
          </p>
        </div>
      </section>

      {/* 2. THE STORY SECTION (Two Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Aesthetic Visual Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 group shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-neutral-950/10 dark:bg-neutral-950/30 z-10 group-hover:bg-neutral-950/20 transition-colors"></div>
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800" 
              alt="Streetwear Culture" 
              className="w-full h-full object-cover opacity-95 dark:opacity-70 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent flex items-end p-8 z-20">
              <span className="text-xs font-black text-white dark:text-cyan-400 uppercase tracking-widest border-l-2 border-cyan-400 pl-4">
                Est. 2026 / Local Drop Movement
              </span>
            </div>
          </div>

          {/* Narrative Content Side */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">Our Manifest</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
                BREAKING THE BOUNDARIES OF STANDARD CLOTHING.
              </h2>
            </div>
            
            <div className="space-y-4 text-neutral-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                VibeWear started with a simple problem: the local fashion market was flooded with generic designs and low-grade fabrics. We wanted something heavy, bold, and expressive. 
              </p>
              <p>
                We started crafting our own custom oversized patterns, sourcing premium bio-washed heavyweight cotton, and injecting cyber-street aesthetics into everyday apparel. VibeWear isn't just a clothing brand—it's a lifestyle for those who refuse to blend in.
              </p>
            </div>
            
            {/* Short Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-white/10">
              <div className="space-y-1">
                <p className="text-3xl font-black text-neutral-950 dark:text-white tracking-tight">50K+</p>
                <p className="text-[10px] font-bold text-neutral-400 dark:text-slate-500 uppercase tracking-widest">Drops Shipped</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-neutral-950 dark:text-cyan-400 tracking-tight">100%</p>
                <p className="text-[10px] font-bold text-neutral-400 dark:text-slate-500 uppercase tracking-widest">Premium Cotton</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-neutral-950 dark:text-white tracking-tight">24/7</p>
                <p className="text-[10px] font-bold text-neutral-400 dark:text-slate-500 uppercase tracking-widest">Tribe Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

     {/* 3. CORE VALUES SECTION */}
<section className="bg-white dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/10 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h3 className="text-xs font-black text-neutral-400 dark:text-cyan-400 uppercase tracking-widest">What We Stand For</h3>
      <p className="text-3xl sm:text-4xl font-black mt-2 text-neutral-950 dark:text-white tracking-tight">OUR CORE ETHICS</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((val) => (
        <div key={val.id} className="bg-white cursor-pointer dark:bg-slate-950/30 border border-neutral-200 dark:border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-neutral-950 dark:hover:border-cyan-400/40 transition-all duration-500 group relative overflow-hidden">
          
          {/* Small top badge indicator */}
          <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-950 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center font-black text-sm mb-8 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 transition-all duration-300 shadow-inner">
            {val.id}
          </div>
          
          <h4 className="text-xl font-black text-neutral-950 dark:text-white mb-3 tracking-wide uppercase">{val.title}</h4>
          <p className="text-neutral-500 dark:text-slate-400 text-sm leading-relaxed font-normal">{val.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. JOIN THE TRIBE (Call to Action) */}
      <section className="max-w-4xl mx-auto text-center py-24 px-4 space-y-8 relative overflow-hidden">
        <div className="space-y-3 relative z-10">
          <h3 className="text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white tracking-tight">BE PART OF THE MOVEMENT</h3>
          <p className="text-neutral-500 dark:text-slate-400 text-base max-w-md mx-auto font-normal">
            Follow our exclusive drops and behind-the-scenes engineering process on socials.
          </p>
        </div>
        
        <div className="pt-2 relative z-10">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-950 text-white dark:bg-white dark:text-slate-950 font-black rounded-xl hover:bg-neutral-800 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition transform hover:-translate-y-0.5 active:scale-95 text-xs tracking-widest uppercase cursor-pointer shadow-lg shadow-neutral-950/10 dark:shadow-white/5"
          >
            <span>FOLLOW @VIBEWEAR</span>
            <span className="text-sm">📸</span>
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;