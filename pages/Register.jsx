import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from 'lucide-react';

function Register({ onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords match nahi ho rahe hain!");
      return;
    }

    if (!formData.agreedToTerms) {
      alert("Kripya terms and conditions accept karein.");
      return;
    }

    console.log("Registering user...", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-cyan-500 selection:text-black font-sans relative overflow-hidden">
      
      {/* Background Tech Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>

      {/* Register Card */}
      <div className="w-full max-w-md bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex w-12 h-12 rounded-xl bg-neutral-950 dark:bg-cyan-500/10 text-white dark:text-cyan-400 items-center justify-center font-black shadow-inner mb-2">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">JOIN THE CLUB</h2>
          <p className="text-sm text-neutral-500 dark:text-slate-400">Create an account for exclusive drops & perks</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Alex Morgan"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-12 py-3 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-12 py-3 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 pt-1">
            <input 
              type="checkbox" 
              id="terms"
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
              className="w-4 h-4 rounded bg-neutral-100 dark:bg-white/5 border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-cyan-500 focus:ring-0 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-neutral-500 dark:text-slate-400 cursor-pointer select-none">
              I agree to the <a href="#terms" className="underline text-neutral-900 dark:text-cyan-400 font-medium">Terms & Services</a>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-neutral-950 dark:bg-white text-white dark:text-slate-950 font-black py-4 rounded-xl text-xs tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-cyan-400 transition transform active:scale-[0.98] cursor-pointer shadow-lg flex items-center justify-center gap-2 mt-4"
          >
            <span>CREATE ACCOUNT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200 dark:border-white/5"></div></div>
          <span className="relative bg-white dark:bg-[#0c0f17] px-3 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Instant Pass</span>
        </div>

        {/* Footer Toggle */}
        <div className="text-center">
          <button 
            type="button"
            onClick={onSwitchToLogin}
            className="text-xs text-neutral-500 dark:text-slate-400 hover:text-neutral-950 dark:hover:text-cyan-400 font-medium transition"
          >
            Already have an account? <span className="underline font-bold text-neutral-950 dark:text-cyan-400">Sign In</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Register;