import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Kids & Middle School", path: "/category/kids" },
  { name: "High School", path: "/category/highschool" },
  { name: "Corporate Wear", path: "/category/corporate" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1f2a38] shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3 md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <span className="text-white font-semibold">Menu</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex justify-center gap-10 text-white text-sm font-medium py-3">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative hover:text-yellow-300 transition
                   after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:bg-yellow-300 after:transition-all
                   ${
                     isActive
                       ? "text-yellow-300 after:w-full"
                       : "after:w-0 hover:after:w-full"
                   }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        {open && (
          <ul className="md:hidden flex flex-col gap-3 text-white text-sm font-medium pb-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2 rounded hover:bg-[#2b3a4c]"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}