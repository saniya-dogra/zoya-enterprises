import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      if (!form.email || !form.password) {
        return alert("Please fill all fields ❌");
      }

      const res = await API.post("/auth/login", form);

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5efe6] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-maroon">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Login to continue shopping with Zoya Enterprises
        </p>

        {/* EMAIL */}
        <div className="mt-6">
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="you@example.com"
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
          onClick={handleLogin}
          className="w-full mt-6 bg-[#7b1f1f] text-white py-3 rounded-full font-semibold hover:opacity-90"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <span
            className="text-maroon font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

        <p
          className="text-center mt-3 text-gray-500 cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>
      </div>
    </div>
  );
}
