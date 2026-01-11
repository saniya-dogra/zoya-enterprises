import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      setMessage("Signup successful ✅ Please login.");
    } catch (err) {
      setMessage("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-softwhite">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-maroon mb-6">Sign Up</h2>

        <input
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="w-full bg-maroon text-white py-2 rounded">
          Sign Up
        </button>

        {message && (
          <p className="mt-4 text-center text-sm">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Signup;
