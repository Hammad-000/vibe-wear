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
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 min-h-screen text-white antialiased">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-3xl mx-auto z-10 space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            WE ARE <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">VIBEWEAR</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-light max-w-xl mx-auto">
            Born in the streets, engineered for the sub-culture. We bridge the gap between futuristic design and high-quality premium streetwear.
          </p>
        </div>
      </section>

      {/* 2. THE STORY SECTION (Two Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Aesthetic Visual Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-slate-900 border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800" 
              alt="Streetwear Culture" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-102 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-8">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest border-l-2 border-cyan-400 pl-3">
                Est. 2026 / Local Drop Movement
              </span>
            </div>
          </div>

          {/* Narrative Content Side */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Our Manifest</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">BREAKING THE BOUNDARIES OF STANDARD CLOTHING.</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              VibeWear started with a simple problem: the local fashion market was flooded with generic designs and low-grade fabrics. We wanted something heavy, bold, and expressive. 
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We started crafting our own custom oversized patterns, sourcing premium bio-washed heavyweight cotton, and injecting cyber-street aesthetics into everyday apparel. VibeWear isn't just a clothing brand—it's a lifestyle for those who refuse to blend in.
            </p>
            
            {/* Short Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div>
                <p className="text-2xl font-black text-white">50K+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Drops Shipped</p>
              </div>
              <div>
                <p className="text-2xl font-black text-cyan-400">100%</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Premium Combed Cotton</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Community Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="bg-white/5 border-y border-white/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">What We Stand For</h3>
            <p className="text-3xl font-black mt-1">OUR CORE ETHICS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.id} className="bg-slate-950/40 border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition duration-300 group">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black text-sm mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                  {val.id}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{val.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN THE TRIBE (Call to Action) */}
      <section className="max-w-4xl mx-auto text-center py-20 px-4 space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black">BE PART OF THE MOVEMENT</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Follow our style drops and behind-the-scenes engineering process on Instagram.
        </p>
        <div className="pt-2">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition transform active:scale-95 text-sm"
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