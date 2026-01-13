
export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Zoya Enterprises</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Premium school & corporate uniform solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-300 cursor-pointer">Shipping</li>
            <li className="hover:text-blue-300 cursor-pointer">Returns</li>
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">WhatsApp Support</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Social & Trust</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">Instagram</li>
            <li className="hover:text-blue-300 cursor-pointer">Facebook</li>
            <li className="hover:text-blue-300 cursor-pointer">Review Us (QR)</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm bg-[#07172C]">
        © 2026 Zoya Enterprises. All Rights Reserved.
      </div>
    </footer>
  );
}
