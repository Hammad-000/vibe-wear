import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Info, Home as HomeIcon, Phone, Sun, Moon } from "lucide-react"; 
import { useTheme } from "../src/context/ThemeContext"; 

function Navbar() {
  const { theme, toggleTheme } = useTheme(); 
  
  // यहाँ हमने cart को 0 डिफाइन कर दिया ताकि एरर खत्म हो जाए।
  // बाद में जब आप Context API या Redux बनाएंगे, तो इसे वहाँ से कनेक्ट कर सकते हैं।
  const cart = 0; 

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-neutral-200/50 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
        
        {/* BRAND LOGO */}
        <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          <ShoppingBag className="w-5 h-5 text-cyan-400" />
          <span>VIBEWEAR</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <Link to="/" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-neutral-950 dark:hover:text-cyan-400 transition">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden md:inline">Home</span>
          </Link>
          
          <Link to="/store" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-neutral-950 dark:hover:text-cyan-400 transition">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden md:inline">Store</span>
          </Link>
          
          <Link to="/about" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-neutral-950 dark:hover:text-cyan-400 transition">
            <Info className="w-4 h-4" />
            <span className="hidden md:inline">About</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-neutral-950 dark:hover:text-cyan-400 transition">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">Contact</span>
          </Link>

          {/* INTERACTIVE CART ICON */}
          <Link to="/cart" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-neutral-950 dark:hover:text-cyan-400 transition relative py-2">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cart > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-cyan-500 text-slate-950 text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cart}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Cart</span>
          </Link>

          {/* THEME TOGGLER */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;