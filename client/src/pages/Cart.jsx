import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../services/cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  const [paymentMethod, setPaymentMethod] = useState("COD"); // COD or UPI

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = 0;
  const grandTotal = subtotal + gst + deliveryFee;

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty ❌");
      return;
    }

    // ✅ go to address page
    navigate("/checkout", {
      state: { paymentMethod, subtotal, gst, deliveryFee, grandTotal },
    });
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] px-6 py-10">
      <ToastContainer position="top-right" autoClose={2000} />

      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Your cart is empty 😢</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT - ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                    <p className="text-sm text-gray-500">
                      Total: ₹{item.price * item.qty}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {/* qty buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-9 h-9 rounded-full bg-gray-200 font-bold text-lg hover:opacity-80"
                    >
                      -
                    </button>

                    <span className="font-bold">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-9 h-9 rounded-full bg-gray-200 font-bold text-lg hover:opacity-80"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      removeFromCart(item.id);
                      toast.info("Item removed 🗑️");
                    }}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - BILL */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Bill Summary</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-4">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <h3 className="font-semibold mb-2">Select Payment Method</h3>

            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={() => setPaymentMethod("UPI")}
                />
                UPI Payment
              </label>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => {
                clearCart();
                toast.info("Cart cleared 🧹");
              }}
              className="w-full mt-3 bg-gray-200 text-black py-3 rounded-full font-semibold hover:opacity-90"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
