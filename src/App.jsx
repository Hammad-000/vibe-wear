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
      <nav className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cheackout">Checkout</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Footer>

        <Link to="/footer">Footer</Link>
      </Footer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cheakout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;