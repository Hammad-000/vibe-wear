import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; 
import "./index.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Store from "../pages/Store";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  const { theme } = useTheme(); 

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white dark:bg-slate-950 dark:text-white light:bg-white light:text-slate-900 transition-colors duration-300">
      <BrowserRouter>
        
        {/* The sticky wrapper now correctly wraps ONLY the Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/80 border-b border-slate-900 dark:border-white/5 px-6 py-4">
          <Navbar />
        </header>

        {/* Main Content Area with Routing added */}
        <main className="flex-grow min-h-[70vh] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;