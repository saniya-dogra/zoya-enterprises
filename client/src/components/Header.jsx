import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-softwhite shadow-md">
      <div className="flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-maroon">
          Zoya Interprises
        </Link>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search uniforms..."
          className="w-1/3 px-4 py-2 border rounded-full focus:outline-maroon"
        />

        {/* Icons */}
        <div className="flex gap-6 text-xl">
          <Link to="/cart">🛒</Link>
          <Link to="/login">👤</Link>
        </div>

      </div>
    </header>
  );
}

export default Header;
