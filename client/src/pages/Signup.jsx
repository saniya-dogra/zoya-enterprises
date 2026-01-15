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
    <div className="min-h-screen flex items-center justify-center bg-[#f5efe6] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-maroon">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Signup with Email & Password
        </p>

        {/* NAME */}
        <div className="mt-6">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="Your Name"
          />
        </div>

        {/* EMAIL */}
        <div className="mt-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="you@gmail.com"
          />
        </div>

        {/* PASSWORD */}
        <div className="mt-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="********"
          />
        </div>

        <button
          onClick={registerUser}
          className="w-full mt-5 bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
        >
          Create Account
        </button>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-maroon font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
