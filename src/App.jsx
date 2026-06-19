import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Info, Home as HomeIcon, CreditCard, Sun, Moon } from "lucide-react"; 
import { useTheme } from "./context/ThemeContext"; 
import "./index.css";

import Home from "../pages/Home";
import About from "../pages/About";
import  Error from "../pages/Error"
import  Checkout from "../pages/Checkout"
import  Contact from "../pages/Contact"

function App() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <BrowserRouter>
      {/* Dynamic Background Classes based on Dark/Light mode */}
      <nav className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/80 border-b border-slate-900 dark:border-white/5 px-6 py-4 flex items-center justify-between text-slate-900 dark:text-white">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          <ShoppingBag className="w-5 h-5 text-cyan-400" />
          <span>VIBEWEAR</span>
        </Link>

        {/* Links & Toggle Button */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          
          <Link to="/about" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">About</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-1.5 hover:text-cyan-400 transition text-slate-600 dark:text-slate-300 dark:hover:text-cyan-400">
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">Contact</span>
          </Link>

          {/* THEME TOGGLE BUTTON */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:text-cyan-400 transition cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>
      </nav>

      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;