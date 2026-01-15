import { useState } from "react";
import { useCart } from "../services/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("COD");

  // If cart empty
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5efe6] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-maroon mb-3">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Add some products to continue shopping.</p>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = subtotal > 999 ? 0 : 50;
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + gst;

  const handleCheckout = () => {
    // Later we will connect backend order placement + Razorpay
    toast.success(`Order Placed ✅ Payment: ${paymentMethod}`);
    alert(`Order Placed ✅ Payment: ${paymentMethod}`);

    // optional clear cart after checkout
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE - Cart Items */}
        <div className="lg:col-span-2 space-y-5">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between gap-4"
            >
              {/* Image */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />

                {/* Product Info */}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>

                  <p className="text-sm text-gray-500 mt-1">
                    Total: ₹{item.price * item.qty}
                  </p>
                </div>
              </div>

              {/* Qty + Remove */}
              <div className="flex flex-col items-end gap-3">
                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item._id, item.qty - 1)}
                    className="w-9 h-9 rounded-full bg-gray-200 font-bold hover:opacity-80"
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item._id, item.qty + 1)}
                    className="w-9 h-9 rounded-full bg-gray-200 font-bold hover:opacity-80"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => {
                    removeFromCart(item._id);
                    toast.error("Removed from cart ❌");
                  }}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Bill Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-4">Bill Summary</h2>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Select Payment Method</h3>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI Payment
              </label>
            </div>
          </div>

          {/* Checkout */}
          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={() => {
              clearCart();
              toast.info("Cart Cleared 🧹");
            }}
            className="w-full mt-3 bg-gray-200 text-black py-3 rounded-full font-semibold hover:opacity-90"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
