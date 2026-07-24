import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, ChevronDown, MessageSquare } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', category: 'Order Tracking', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ['Order Tracking', 'Size Exchange', 'Custom Drop', 'General Inquiry'];

  const faqs = [
    {
      question: "How long does standard delivery take?",
      answer: "Orders are processed within 24 hours and typically delivered within 2-4 business days across Pakistan."
    },
    {
      question: "What is your return & size exchange policy?",
      answer: "We offer hassle-free size exchanges within 7 days of delivery as long as items are unworn with original tags attached."
    },
    {
      question: "How do I track my order in real-time?",
      answer: "Once your order dispatches, you will receive a tracking link via SMS and email with live courier updates."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', category: 'Order Tracking', message: '' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950 dark:text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-[11px] font-extrabold bg-neutral-900 text-white dark:bg-cyan-500/10 dark:text-cyan-400 border border-neutral-800 dark:border-cyan-500/20 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> 24/7 Priority Support
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            GET IN <span className="bg-gradient-to-r from-neutral-800 via-neutral-600 to-stone-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">TOUCH.</span>
          </h1>
          <p className="text-neutral-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Order tracking, size issues, or custom drop inquiries? Drop us a line and our sub-culture crew will reply within 2 hours.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* CARD 1: EMAIL */}
            <div className="bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-neutral-900 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs tracking-widest text-neutral-400 dark:text-slate-400 uppercase">Drop an Email</h3>
                  <a href="mailto:support@vibestreetwear.com" className="font-black text-lg text-neutral-900 dark:text-white hover:text-cyan-500 transition-colors block">
                    support@vibestreetwear.com
                  </a>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">For general support & corporate queries.</p>
                </div>
              </div>
            </div>

            {/* CARD 2: WHATSAPP / HELPLINE */}
            <div className="bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-neutral-900 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs tracking-widest text-neutral-400 dark:text-slate-400 uppercase">WhatsApp & Call</h3>
                  <a href="tel:+923214567890" className="font-black text-lg text-neutral-900 dark:text-white hover:text-cyan-500 transition-colors block">
                    +92 321 4567890
                  </a>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-slate-400 pt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Mon-Sat | 11:00 AM - 8:00 PM PST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: HQ WAREHOUSE */}
            <div className="bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:border-neutral-400 dark:hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-neutral-900 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs tracking-widest text-neutral-400 dark:text-slate-400 uppercase">Main HQ Warehouse</h3>
                  <p className="font-black text-lg text-neutral-900 dark:text-white">Karachi, Pakistan</p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">Plot 42-C, Shahrah-e-Faisal (Fulfillment Center)</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl backdrop-blur-md">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black tracking-tight uppercase flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" /> Send a Direct Message
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md">
                Fast Response
              </span>
            </div>
            
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Message dispatched successfully! Our crew will email you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Category Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                  Select Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        formData.category === cat
                          ? 'bg-neutral-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md'
                          : 'bg-neutral-100 text-neutral-600 dark:bg-white/5 dark:text-slate-300 hover:bg-neutral-200 dark:hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Hammad" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition-colors"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">Message / Issue Details</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about order details or size exchange requirements..." 
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-neutral-200 dark:border-white/10 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-4 bg-neutral-950 text-white dark:bg-cyan-500 dark:text-slate-950 font-black rounded-xl text-xs tracking-widest uppercase shadow-lg hover:bg-neutral-800 dark:hover:bg-cyan-400 transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Dispatch Message</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="mt-20 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black uppercase tracking-tight">Frequently Asked Questions</h3>
            <p className="text-xs text-neutral-500 dark:text-slate-400">Quick solutions to common queries</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-neutral-200 dark:border-white/10 rounded-2xl bg-white dark:bg-white/[0.02] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-sm flex justify-between items-center gap-4 hover:text-cyan-500 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs text-neutral-500 dark:text-slate-400 leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;