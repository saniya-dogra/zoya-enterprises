import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/zoya_logo.png";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Zoya Enterprises"
            className="h-40 max-w-[300px] object-contain"
          />
        </Link>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="relative flex-1 max-w-3xl"
        >
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-2 border-maroon rounded-full py-3 pl-6 pr-16 focus:outline-none"
          />

          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-maroon text-white p-3 rounded-full hover:opacity-90"
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* CART + LOGIN */}
        <div className="flex items-center gap-8">
          <Link to="/cart" className="relative text-maroon">
            <FiShoppingCart size={28} />
            <span className="absolute -top-2 -right-3 bg-maroon text-white text-xs rounded-full px-1.5">
              0
            </span>
          </Link>

          <Link to="/login" className="text-maroon">
            <FiUser size={28} />
          </Link>
        </div>

      </div>
    </header>
  );
}
