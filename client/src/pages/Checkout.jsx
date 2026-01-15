import { useState } from "react";
import { useCart } from "../services/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    house: "",
    area: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = subtotal > 999 ? 0 : 50;
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + gst;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    // validation
    for (let key in address) {
      if (!address[key]) {
        return toast.error("Please fill all address fields ❌");
      }
    }

    toast.success("Order placed successfully ✅");

    alert(`
Order Placed ✅
Payment: ${paymentMethod}
Total: ₹${grandTotal}
Deliver to: ${address.house}, ${address.area}, ${address.city}
`);

    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-maroon">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ADDRESS FORM */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="Full Name"
              name="fullName"
              value={address.fullName}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="Phone Number"
              name="phone"
              value={address.phone}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="Pincode"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="City"
              name="city"
              value={address.city}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="State"
              name="state"
              value={address.state}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg"
              placeholder="House No / Building"
              name="house"
              value={address.house}
              onChange={handleChange}
            />

            <input
              className="border px-4 py-2 rounded-lg md:col-span-2"
              placeholder="Area / Street / Landmark"
              name="area"
              value={address.area}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* BILL + PAYMENT */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>

          {/* Payment */}
          <div className="mt-5">
            <h3 className="font-semibold mb-2">Payment Method</h3>

            <label className="flex items-center gap-2 mb-2 cursor-pointer">
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI Payment
            </label>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
