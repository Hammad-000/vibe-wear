import React, { useState } from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; 
import "./index.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import Store from "../pages/Store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";


function App() {
  const { theme } = useTheme(); 

  const [cartItems, setCartItems] = useState({});
  const totalCartCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const handleAddToCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white dark:bg-slate-950 dark:text-white light:bg-white light:text-slate-900 transition-colors duration-300">
      <BrowserRouter>
        
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-white/5 px-6 py-4">
          {/* Passed the total count as a prop to your Navbar */}
          <Navbar cartCount={totalCartCount} />
        </header>

        <main className="flex-grow min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route 
              path="/store" 
              element={<Store cartItems={cartItems} onAddToCart={handleAddToCart} />} 
            />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;