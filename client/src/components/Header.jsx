import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/zoya-interprises-logo.png";
import { useCart } from "../services/cart";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();

    if (q.includes("kid")) navigate("/category/kids");
    else if (q.includes("high")) navigate("/category/highschool");
    else if (q.includes("corporate")) navigate("/category/corporate");
    else if (q.includes("access")) navigate("/category/accessories");
    else navigate(`/search?q=${query}`);
  };

  return (
    <header className="bg-white border-b">
      <div className="w-full px-10 py-4 flex items-center gap-2">
        {/* ✅ LEFT: TEXT + LOGO aligned perfectly */}
        <Link to="/" className="flex items-center gap-3 min-w-fit">
          {/* TEXT */}
          <div className="flex flex-col justify-center leading-none -mt-1">
            <span
              className="text-3xl text-blue-900 font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Zoya
            </span>

            <span
              className="text-xl text-blue-600 font-bold -mt-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Enterprises
            </span>
          </div>

          {/* LOGO */}
          <img src={logo} alt="Zoya Logo" className="h-20 w-20 object-contain" />
        </Link>

        {/* ✅ SEARCH BAR (takes all remaining space) */}
        <form
  onSubmit={handleSearch}
  className="flex-1 relative"
>
  {/* 🔍 Search Icon */}
  <FiSearch
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
    size={18}
  />

  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for products, brands and more"
    className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-12 outline-none text-sm 
               focus:ring-2 focus:ring-blue-400 transition"
  />

  {/* ❌ Clear Button */}
  {query && (
    <button
      type="button"
      onClick={() => setQuery("")}
      className="
        absolute right-3 top-1/2 -translate-y-1/2
        bg-gray-300 hover:bg-gray-400
        rounded-full p-1.5
        transition
      "
    >
      <FiX size={14} className="text-gray-700" />
    </button>
  )}
</form>


        {/* ✅ RIGHT: Login + Cart */}
        <div className="flex items-center gap-8 whitespace-nowrap">
          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600"
          >
            <FiUser size={20} />
            <span>Login / Signup</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 relative"
          >
            <FiShoppingCart size={22} />
            <span>Cart</span>

            <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
