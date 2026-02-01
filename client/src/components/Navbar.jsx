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
    <nav className="bg-[#1f2a38] shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center gap-10 text-white text-sm font-medium py-3">

          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative hover:text-yellow-300 transition
                   after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:bg-yellow-300 after:transition-all
                   ${isActive
                     ? "text-yellow-300 after:w-full"
                     : "after:w-0 hover:after:w-full"}`
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
