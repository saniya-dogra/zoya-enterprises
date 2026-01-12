import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Kids & Middle School", path: "/category/kids" },
  { name: "High School", path: "/category/highschool" },
  { name: "Corporate Wear", path: "/category/corporate" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-10">
        <ul className="flex justify-center gap-10 text-white font-semibold text-sm py-3">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                    : "hover:text-yellow-300"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
