import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async () => {
    try {
      if (!form.name || !form.email || !form.password) {
        return alert("Please fill all fields ❌");
      }

      await API.post("/auth/register", form);

      alert("Account created successfully ✅");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed ❌");
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1f3a] to-[#f5efe6] px-4">
    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-[#d4af37]">
      
      <h2 className="text-3xl font-extrabold text-center text-[#0b1f3a]">
        Create Account
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Signup with Email & Password
      </p>

      {/* Full Name */}
      <div className="mt-6">
        <label className="font-semibold text-[#0b1f3a]">Full Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="font-semibold text-[#0b1f3a]">Email</label>
        <input
          type="email"
          placeholder="you@gmail.com"
          className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      {/* Password */}
      <div className="mt-4">
        <label className="font-semibold text-[#0b1f3a]">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-[#0b1f3a] text-white py-3 rounded-full font-bold hover:bg-[#132d52] transition">
        Create Account
      </button>

      <p className="text-center mt-5 text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-[#d4af37] font-bold cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  </div>
);


}
