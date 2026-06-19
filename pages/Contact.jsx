import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950 dark:text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neutral-200/40 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[11px] font-bold bg-neutral-900 text-white dark:bg-cyan-500/10 dark:text-cyan-400 uppercase tracking-widest">
            24/7 Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            GET IN <span className="bg-gradient-to-r from-neutral-800 via-neutral-600 to-stone-500 dark:from-cyan-400 dark:via-teal-400 dark:to-indigo-400 bg-clip-text text-transparent">TOUCH.</span>
          </h1>
          <p className="text-neutral-500 dark:text-slate-400 text-sm sm:text-base font-light">
            Order tracking, size issues, or custom drop inquiries? Drop us a line and our sub-culture crew will reply within 2 hours.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CARD 1: EMAIL */}
            <div className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-300 dark:hover:border-cyan-500/30 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-xl">
                  ✉️
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-wide text-neutral-400 uppercase">Drop an Email</h3>
                  <p className="font-black text-lg text-neutral-900 dark:text-white">support@vibestreetwear.com</p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">For general support and corporate queries.</p>
                </div>
              </div>
            </div>

            {/* CARD 2: WHATSAPP / HELPLINE */}
            <div className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-300 dark:hover:border-cyan-500/30 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-xl">
                  💬
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-wide text-neutral-400 uppercase">WhatsApp & Call</h3>
                  <p className="font-black text-lg text-neutral-900 dark:text-white">+92 321 4567890</p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">Mon-Sat | 11:00 AM - 8:00 PM PST</p>
                </div>
              </div>
            </div>

            {/* CARD 3: HQ WAREHOUSE */}
            <div className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-300 dark:hover:border-cyan-500/30 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-xl">
                  📍
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-wide text-neutral-400 uppercase">Main HQ Warehouse</h3>
                  <p className="font-black text-lg text-neutral-900 dark:text-white">Karachi, Pakistan</p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">Plot 42-C, Shahrah-e-Faisal (Fulfillment Center)</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-8 rounded-3xl shadow-xl">
            <h2 className="text-xl font-black mb-6 tracking-tight">SEND A DIRECT MESSAGE</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-2 animate-fade-in">
                ⚡ Message Sent Successfully! Our team will reach out shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Hammad" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="hammad@example.com" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">Message / Issue Details</label>
                <textarea 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about order details or size exchange requirements..." 
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-neutral-950 text-white dark:bg-cyan-500 dark:text-slate-950 font-black rounded-xl text-sm tracking-widest uppercase shadow-md hover:bg-neutral-800 dark:hover:bg-cyan-400 transition-all active:scale-[0.99] cursor-pointer"
              >
                Dispatch Message 🚀
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;