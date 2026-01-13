import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-maroon text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-3">Zoya Enterprises</h3>
          <p className="text-sm text-gray-200">
            Premium school & corporate uniform solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h4 className="font-semibold mb-3">Customer Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                WhatsApp Support
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3">Social & Trust</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Review Us (QR)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} Zoya Enterprises. All Rights Reserved.
      </div>
    </footer>
  );
}
