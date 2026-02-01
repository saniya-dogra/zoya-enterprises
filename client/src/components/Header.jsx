import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/zoya-logo.png";
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
    <header className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Zoya Enterprises"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="flex-1 relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, brands and more"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-12 text-sm outline-none
                       focus:ring-2 focus:ring-blue-400 transition"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         bg-gray-300 hover:bg-gray-400 rounded-full p-1.5"
            >
              <FiX size={14} />
            </button>
          )}
        </form>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8 whitespace-nowrap">

          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600"
          >
            <FiUser size={20} />
            <span>Login / Signup</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 relative"
          >
            <FiShoppingCart size={22} />
            <span>Cart</span>

            {cart.length > 0 && (
              <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </header>
  );
}
