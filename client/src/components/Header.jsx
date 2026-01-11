import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-softwhite shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-maroon">
          Zoya Interprises
        </Link>

        {/* Search */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search school & corporate uniforms..."
            className="w-full px-5 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-maroon"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">
          <Link to="/cart">🛒</Link>
          <Link to="/login">👤</Link>
        </div>

      </div>
    </header>
  );
}

export default Header;
