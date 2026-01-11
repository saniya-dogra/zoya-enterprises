import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage("Login successful ✅");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Invalid email or password ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-maroon text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login to continue shopping with Zoya Interprises
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-maroon text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Links */}
        <div className="mt-6 text-center text-sm">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-maroon font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

          <Link
            to="/"
            className="block mt-3 text-gray-500 hover:text-maroon"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
