import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-blue-50 border-t mt-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-900">
            Zoya Enterprises
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Premium school & corporate uniform solutions.  
            Quality fabrics, modern stitching, and reliable delivery
            for institutions and organizations.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5 text-blue-700 text-xl">
            <FiFacebook className="cursor-pointer hover:text-blue-900" />
            <FiInstagram className="cursor-pointer hover:text-pink-600" />
            <FiTwitter className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="footerTitle">About Us</h3>
          <ul className="footerList">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="footerTitle">Products</h3>
          <ul className="footerList">
            <li><Link to="/category/kids">Kids Uniforms</Link></li>
            <li><Link to="/category/highschool">High School</Link></li>
            <li><Link to="/category/corporate">Corporate Wear</Link></li>
            <li><Link to="/category/accessories">Accessories</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="footerTitle">Support</h3>
          <ul className="footerList">
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="footerTitle">Contact</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-2 items-center">
              <FiMail /> support@zoyaenterprises.com
            </div>

            <div className="flex gap-2 items-center">
              <FiPhone /> +91 XXXXX XXXXX
            </div>

            <div className="flex gap-2 items-start">
              <FiMapPin />
              Srinagar, J&K  
              India
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            WhatsApp Support
          </a>
        </div>
      </div>

      {/* MIDDLE STRIP */}
      <div className="bg-blue-100 border-y">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-sm text-blue-900 font-medium gap-3">
          <span>Secure Payments</span>
          <span>Easy Returns</span>
          <span>Trusted by Schools & Institutions</span>
          <span>Fast Delivery</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Zoya Enterprises — All Rights Reserved
      </div>
    </footer>
  );
}
