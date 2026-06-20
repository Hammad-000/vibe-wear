import React from 'react';

function Footer() {
  // Dynamic year logic (No static text)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              VIBEWEAR 🛍️
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Premium streetwear drop culture. Heavyweight premium fabrics designed for the sub-culture. Match your vibe, own your style.
            </p>
          </div>

          {/* Quick Newsletter Signup */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-cyan-400">
              Join the Drop List
            </h4>
            <p className="text-slate-400 text-xs">
              Subscribe to get early access to exclusive limited drops and secret sales.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                required
              />
              <button className="bg-white text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-cyan-400 hover:text-slate-950 transition transform active:scale-95 cursor-pointer shrink-0">
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* MIDDLE SECTION: QUICK LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm">
          
          {/* Shop Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Shop</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hoodies" className="hover:text-cyan-400 transition">Oversized Hoodies</a></li>
              <li><a href="#tees" className="hover:text-cyan-400 transition">Graphic Tees</a></li>
              <li><a href="#bottoms" className="hover:text-cyan-400 transition">Cargo Pants</a></li>
              <li><a href="#accessories" className="hover:text-cyan-400 transition">Accessories</a></li>
            </ul>
          </div>

          {/* Collections Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Collections</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#cyber" className="hover:text-cyan-400 transition">Cyber Streetwear</a></li>
              <li><a href="#acid" className="hover:text-cyan-400 transition">Acid Wash Series</a></li>
              <li><a href="#limited" className="hover:text-cyan-400 transition">Limited Drops</a></li>
              <li><a href="#sale" className="hover:text-cyan-400 text-red-400 transition font-medium">Clearance Sale %</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Help & Info</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#track" className="hover:text-cyan-400 transition">Track Your Order</a></li>
              <li><a href="#shipping" className="hover:text-cyan-400 transition">Shipping Policy</a></li>
              <li><a href="#exchange" className="hover:text-cyan-400 transition">Easy 7-Day Exchange</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Socials / Contact Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Connect With Us</h5>
            <div className="flex gap-4 text-slate-400">
              <a href="#instagram" className="hover:text-cyan-400 transition text-lg" title="Instagram">📸</a>
              <a href="#tiktok" className="hover:text-cyan-400 transition text-lg" title="TikTok">🎵</a>
              <a href="#facebook" className="hover:text-cyan-400 transition text-lg" title="Facebook">👥</a>
              <a href="#whatsapp" className="hover:text-emerald-400 transition text-lg" title="WhatsApp Chat">💬</a>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Support: support@vibewear.com<br />
              Mon-Sat | 10:00 AM - 6:00 PM
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} VibeWear. All rights reserved. Made for sub-culture style.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;