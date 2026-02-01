import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-[#1f2a38] text-gray-200">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        {/* BRAND */}
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white">
            Zoya Enterprises
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Premium school & corporate uniform solutions with modern
            stitching, quality fabrics, and reliable delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-[#27364a] hover:bg-blue-500 hover:scale-110 transition duration-300 shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* FOOTER COLUMN COMPONENT */}
        {[
          {
            title: "About Us",
            items: ["Our Story", "Careers", "Press", "Contact Us"],
          },
          {
            title: "Products",
            items: [
              "Kids Uniforms",
              "High School",
              "Corporate Wear",
              "Accessories",
            ],
          },
          {
            title: "Support",
            items: [
              "Shipping",
              "Returns",
              "Privacy Policy",
              "Terms & Conditions",
            ],
          },
        ].map((section, idx) => (
          <div key={idx} className="space-y-3 animate-fadeIn">
            <h3 className="font-semibold text-white">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-blue-400 hover:translate-x-2 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div className="space-y-3 animate-fadeIn">
          <h3 className="font-semibold text-white">Contact</h3>

          <p className="flex gap-2 items-center text-sm hover:text-blue-400 transition">
            <FiMail /> support@zoyaenterprises.com
          </p>

          <p className="flex gap-2 items-center text-sm hover:text-blue-400 transition">
            <FiPhone /> +91 XXXXX XXXXX
          </p>

          <p className="flex gap-2 items-center text-sm hover:text-blue-400 transition">
            <FiMapPin /> Srinagar, J&K, India
          </p>

          {/* Animated WhatsApp Button */}
          <button className="mt-3 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition duration-300">
            WhatsApp Support
          </button>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="bg-[#27364a] grid md:grid-cols-4 text-center text-sm">
        {[
          "Secure Payments",
          "Easy Returns",
          "Trusted by Schools",
          "Fast Delivery",
        ].map((text, i) => (
          <div
            key={i}
            className="py-4 border-t border-gray-600 hover:bg-[#32465e] transition duration-300 cursor-default"
          >
            {text}
          </div>
        ))}
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm py-4 border-t border-gray-600">
        © {new Date().getFullYear()} Zoya Enterprises — All Rights Reserved
      </div>
    </footer>
  );
}


