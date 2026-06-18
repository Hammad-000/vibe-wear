import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Checkout from "../pages/checkout";
import Footer from "../pages/Footer";
import Cart from "../pages/cart";

function App() {
  return (
    <BrowserRouter>
      {/* 1. PREMIUM GLASSMORPHISM NAVBAR (Har page par top par rahega) */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          VIBEWEAR 🛍️
        </h1>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/cart" className="hover:text-cyan-400 transition">Cart 🛒</Link>
          <Link to="/checkout" className="hover:text-cyan-400 transition">Checkout</Link>
        </div>
      </nav>

      {/* 2. DYNAMIC PAGES CONTENT (Sirf ye hissa change hoga jab aap links par click karenge) */}
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          {/* Checkout ka main path sahi kar diya hai */}
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </main>

      {/* 3. GLOBAL FOOTER (Har page ke last mein automatically load hoga) */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;