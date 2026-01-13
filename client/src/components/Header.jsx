import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
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

        {/* ✅ LEFT: Zoya Enterprises text (cursive, stylish) */}
        <Link to="/" className="leading-none">
          <span
            className="block text-3xl text-blue-900 font-semibold"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Zoya
          </span>
          <span
            className="block text-xl text-blue-600 -mt-1"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Enterprises
          </span>
        </Link>

        {/* ✅ LOGO (big) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Zoya Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* ✅ SEARCH BAR (takes all remaining space) */}
        <form
          onSubmit={handleSearch}
          className="flex-1 flex items-center bg-gray-100 rounded-full px-5 py-3"
        >
          <FiSearch className="text-gray-500 mr-3" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent outline-none text-sm"
          />
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
