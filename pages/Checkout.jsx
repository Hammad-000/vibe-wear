import React from "react";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Billing Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg w-full"
            />

            <textarea
              placeholder="Shipping Address"
              rows="4"
              className="border p-3 rounded-lg w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Cake</span>
              <span>$20</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>$5</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$25</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;