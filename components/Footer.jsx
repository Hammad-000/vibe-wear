import React from 'react';
import { 
  ShoppingBag, 
  Send, 
  Sparkles,
  HelpCircle,
  Truck
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
              VIBEWEAR <ShoppingBag className="w-6 h-6 text-cyan-400 inline" />
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Premium streetwear drop culture. Heavyweight premium fabrics designed for the sub-culture. Match your vibe, own your style.
            </p>
          </div>

          {/* Quick Newsletter Signup */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Join the Drop List
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
              <button 
                type="submit"
                className="bg-white text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-cyan-400 hover:text-slate-950 transition transform active:scale-95 cursor-pointer shrink-0 tracking-wider flex items-center justify-center gap-2"
              >
                <span>SUBSCRIBE</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* MIDDLE SECTION: QUICK LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm">
          
          {/* Shop Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-slate-400" /> Shop
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hoodies" className="hover:text-cyan-400 transition duration-200">Oversized Hoodies</a></li>
              <li><a href="#tees" className="hover:text-cyan-400 transition duration-200">Graphic Tees</a></li>
              <li><a href="#bottoms" className="hover:text-cyan-400 transition duration-200">Cargo Pants</a></li>
              <li><a href="#accessories" className="hover:text-cyan-400 transition duration-200">Accessories</a></li>
            </ul>
          </div>

          {/* Collections Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-slate-400" /> Collections
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#cyber" className="hover:text-cyan-400 transition duration-200">Cyber Streetwear</a></li>
              <li><a href="#acid" className="hover:text-cyan-400 transition duration-200">Acid Wash Series</a></li>
              <li><a href="#limited" className="hover:text-cyan-400 transition duration-200">Limited Drops</a></li>
              <li><a href="#sale" className="hover:text-cyan-400 text-red-400/90 transition duration-200 font-medium">Clearance Sale %</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" /> Help & Info
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#track" className="hover:text-cyan-400 transition duration-200 flex items-center gap-1"><Truck className="w-3 h-3 inline" /> Track Your Order</a></li>
              <li><a href="#shipping" className="hover:text-cyan-400 transition duration-200">Shipping Policy</a></li>
              <li><a href="#exchange" className="hover:text-cyan-400 transition duration-200">Easy 7-Day Exchange</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition duration-200">FAQs</a></li>
            </ul>
          </div>

          {/* Socials / Contact Column */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Connect With Us</h5>
            <div className="flex gap-2.5 text-slate-400">
              
              {/* Instagram SVG */}
              <a href="#instagram" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition duration-300 flex items-center justify-center" title="Instagram" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              
              {/* TikTok / X Alternative SVG */}
              <a href="#tiktok" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition duration-300 flex items-center justify-center" title="TikTok" aria-label="TikTok">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              
              {/* Facebook SVG */}
              <a href="#facebook" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition duration-300 flex items-center justify-center" title="Facebook" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              
              {/* WhatsApp/Chat SVG */}
              <a href="#whatsapp" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 transition duration-300 flex items-center justify-center" title="WhatsApp Chat" aria-label="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
            <div className="text-xs text-slate-500 pt-2 leading-relaxed">
              <span className="block font-medium text-slate-400">Support: support@vibewear.com</span>
              <span>Mon-Sat | 10:00 AM - 6:00 PM</span>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} VibeWear. All rights reserved. Made for sub-culture style.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-300 hover:underline transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 hover:underline transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;