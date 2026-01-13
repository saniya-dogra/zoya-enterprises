import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Step 1: Send OTP
  const sendOtp = async () => {
    try {
      await API.post("/otp/send", { email: form.email });
      alert("OTP sent to your email ✅");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "OTP sending failed ❌");
    }
  };

  // Step 2: Verify OTP
  const verifyOtp = async () => {
    try {
      await API.post("/otp/verify", { email: form.email, otp: form.otp });
      alert("OTP verified ✅");
      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed ❌");
    }
  };

  // Step 3: Register user
  const registerUser = async () => {
    try {
      await API.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

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
          Signup with OTP verification
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
            placeholder="you@example.com"
          />
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <button
            onClick={sendOtp}
            className="w-full mt-5 bg-maroon text-white py-3 rounded-full font-semibold hover:opacity-90"
          >
            Send OTP
          </button>
        )}

        {/* OTP INPUT */}
        {step >= 2 && (
          <div className="mt-4">
            <label className="block font-medium mb-1">Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={form.otp}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none"
              placeholder="6-digit OTP"
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <button
            onClick={verifyOtp}
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
          >
            Verify OTP
          </button>
        )}

        {/* PASSWORD */}
        {step >= 3 && (
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
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <button
            onClick={registerUser}
            className="w-full mt-5 bg-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90"
          >
            Create Account
          </button>
        )}

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
