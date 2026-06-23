import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, ShoppingBag, ChevronRight, CheckCircle2 } from 'lucide-react';

function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isOrdered, setIsOrdered] = useState(false);


 
  const subtotal = 4897;
  const shipping = 0; 
  const total = subtotal + shipping;

  if (isOrdered) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black mb-2 text-slate-800 dark:text-white tracking-tight">ORDER PLACED!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Your order has been successfully booked. A confirmation email and tracking details have been dispatched to your contact coordinates.
        </p>
        <Link to="/" className="w-full inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-4 px-6 rounded-xl transition cursor-pointer">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
        <Link to="/cart" className="hover:text-cyan-400 transition">Cart</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-cyan-400">Checkout</span>
      </div>

      <h1 className="text-3xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
        CHECKOUT
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Elements: Shipping & Payment Forms */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. Shipping Address Section */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Truck className="w-5 h-5 text-cyan-400" /> Shipping Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">First Name</label>
                <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Address</label>
                <input type="text" placeholder="Apartment, Suite, Unit, Street Address" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">City</label>
                <input type="text" placeholder="New York" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Postal Code</label>
                <input type="text" placeholder="10001" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" required />
              </div>
            </div>
          </div>

          {/* 2. Payment Method Section */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <CreditCard className="w-5 h-5 text-indigo-400" /> Payment Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              
              {/* Online Card Option */}
              <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition ${paymentMethod === 'card' ? 'border-cyan-400 bg-cyan-500/5' : 'border-slate-200 dark:border-white/10'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-cyan-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">Credit / Debit Card</span>
                </div>
              </label>

              {/* Cash On Delivery Option */}
              <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition ${paymentMethod === 'cod' ? 'border-cyan-400 bg-cyan-500/5' : 'border-slate-200 dark:border-white/10'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-cyan-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">Cash On Delivery (COD)</span>
                </div>
              </label>
            </div>

            {/* Conditional Card Form Input rendering */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">CVV</label>
                    <input type="password" placeholder="***" maxLength="3" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 text-slate-800 dark:text-white text-sm" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Elements: Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" /> Summary
            </h2>
            
            {/* Short Mini-Items List */}
            <div className="max-h-40 overflow-y-auto space-y-3 mb-6 border-b border-slate-200 dark:border-white/10 pb-4 pr-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400 line-clamp-1">Cyberpunk Hoodie (XL) × 1</span>
                <span className="font-semibold text-slate-800 dark:text-white">${subtotal - 1898}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400 line-clamp-1">Neon Cargo Pants (L) × 1</span>
                <span className="font-semibold text-slate-800 dark:text-white">$1,898</span>
              </div>
            </div>

            {/* Checkout Pricing Accumulation */}
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900 dark:text-white">${subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping</span>
                <span className="text-emerald-500 font-bold">FREE</span>
              </div>
              <div className="border-t border-slate-200 dark:border-white/10 pt-4 flex justify-between text-base font-bold text-slate-900 dark:text-white">
                <span>Grand Total</span>
                <span className="text-xl text-cyan-400">${total}</span>
              </div>
            </div>

            {/* Confirmation Click Action Button */}
            <button 
              onClick={() => setIsOrdered(true)}
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-cyan-500/10 transition cursor-pointer text-center text-sm uppercase tracking-wider"
            >
              Place Order Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;