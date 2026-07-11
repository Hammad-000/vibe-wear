import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

function Login({ onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-cyan-500 selection:text-black font-sans relative overflow-hidden">
      
      {/* Background Tech Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex w-12 h-12 rounded-xl bg-neutral-950 dark:bg-cyan-500/10 text-white dark:text-cyan-400 items-center justify-center font-black shadow-inner mb-2">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">WELCOME BACK</h2>
          <p className="text-sm text-neutral-500 dark:text-slate-400">Enter your details to access your drops</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500">Password</label>
              <a href="#forgot" className="text-xs text-neutral-500 dark:text-cyan-400 hover:underline font-medium">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-11 pr-12 py-3.5 text-sm focus:outline-none focus:border-neutral-950 dark:focus:border-cyan-500 transition font-medium placeholder-neutral-400 dark:placeholder-slate-600"
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

          {/* Submit */}
          <button 
            type="submit"
            className="w-full bg-neutral-950 dark:bg-white text-white dark:text-slate-950 font-black py-4 rounded-xl text-xs tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-cyan-400 transition transform active:scale-[0.98] cursor-pointer shadow-lg flex items-center justify-center gap-2 mt-2"
          >
            <span>ACCESS ACCOUNT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200 dark:border-white/5"></div></div>
          <span className="relative bg-white dark:bg-[#0c0f17] px-3 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Secure Entry</span>
        </div>

        {/* Footer Toggle */}
        <div className="text-center">
          <button 
            type="button"
            onClick={onSwitchToRegister}
            className="text-xs text-neutral-500 dark:text-slate-400 hover:text-neutral-950 dark:hover:text-cyan-400 font-medium transition"
          >
            New to VibeWear? <span className="underline font-bold text-neutral-950 dark:text-cyan-400">Create an Account</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;