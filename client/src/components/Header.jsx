import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/zoya_logo.png";
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
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Zoya Enterprises" className="h-20 w-20 object-contain" />

          <div className="leading-none">
            <span className="block text-4xl text-blue-900" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Zoya
            </span>
            <span className="block text-2xl text-blue-700 -mt-1" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Enterprises
            </span>
          </div>
        </Link>

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-10 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, brands and more"
            className="w-full border-2 border-maroon rounded-full py-3 pl-6 pr-14 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-maroon text-white p-3 rounded-full"
          >
            <FiSearch size={18} />
          </button>
        </form>

        {/* CART + LOGIN */}
        <div className="flex items-center gap-6 text-maroon">
          <Link to="/cart" className="relative">
            <FiShoppingCart size={26} />
            <span className="absolute -top-2 -right-3 bg-maroon text-white text-xs rounded-full px-1.5">
              {cart.length}
            </span>
          </Link>

          <Link to="/login">
            <FiUser size={26} />
          </Link>
        </div>
      </div>
    </header>
  );
}
