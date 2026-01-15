import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../services/cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart } = useCart();

  const { paymentMethod, grandTotal } = location.state || {};

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    house: "",
    area: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.pincode ||
      !address.house ||
      !address.area ||
      !address.city ||
      !address.state
    ) {
      toast.error("Please fill complete address ❌");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty ❌");
      return;
    }

    // ✅ Here you will integrate real payment gateway later (Razorpay)
    toast.success(
      `Order placed ✅ Payment: ${paymentMethod} | Total ₹${grandTotal}`
    );

    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] px-6 py-10">
      <ToastContainer position="top-right" autoClose={2000} />

      <h1 className="text-3xl font-bold mb-6">Delivery Address</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="house"
            placeholder="Flat / House No."
            value={address.house}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="area"
            placeholder="Area / Street / Locality"
            value={address.area}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
        </div>

        <button
          onClick={placeOrder}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
