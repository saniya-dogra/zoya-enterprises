import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      // ✅ store auth data
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      setMessage("Login successful ✅");
      setIsError(false);

      setTimeout(() => navigate("/"), 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid email or password ❌");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1f3a] to-[#f5efe6] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-[#d4af37]">

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center text-[#0b1f3a]">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to continue shopping with Zoya Enterprises
        </p>

        {/* MESSAGE */}
        {message && (
          <p className={`mt-4 text-center font-semibold text-sm 
            ${isError ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="mt-6">
            <label className="font-semibold text-[#0b1f3a]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              required
            />
          </div>

          {/* PASSWORD WITH EYE TOGGLE */}
          <div className="mt-4 relative">
            <label className="font-semibold text-[#0b1f3a]">
              Password
            </label>

            <input
              type={showPass ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              required
            />

            {/* 👁 Eye Button */}
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[46px] text-gray-500 hover:text-black"
            >
              {showPass ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-[#0b1f3a] text-white py-3 rounded-full font-bold hover:bg-[#132d52] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* SIGNUP LINK */}
        <p className="text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#d4af37] font-bold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;
