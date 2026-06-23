import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Info, Home as HomeIcon, Phone, Sun, Moon } from "lucide-react"; 
import { useTheme } from "../src/context/ThemeContext"; 

function Navbar() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav className="w-full flex items-center justify-between transition-colors duration-300 text-slate-900 dark:text-white">
      
      <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        <ShoppingCart className="w-5 h-5 text-cyan-400" />
        <span>VIBEWEAR</span>
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        
        <Link to="/store" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Store</span>
        </Link>
        
        <Link to="/about" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
          <Info className="w-4 h-4" />
          <span className="hidden sm:inline">About</span>
        </Link>

        <Link to="/contact" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Contact</span>
        </Link>

        <Link to="/cart" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
         <ShoppingCart className="w-5 h-5 text-cyan-400" />
          <span className="hidden sm:inline">Cart</span>
        </Link>


        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:text-cyan-400 transition cursor-pointer"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;