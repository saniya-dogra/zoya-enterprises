function Footer() {
  return (
    <footer className="bg-maroon text-white px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

      <div>
        <h3 className="font-bold text-lg">Zoya Interprises</h3>
        <p className="mt-2 text-sm">
          Premium school & corporate uniform solutions.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Quick Links</h3>
        <ul className="mt-2 text-sm space-y-1">
          <li>Privacy Policy</li>
          <li>Shipping</li>
          <li>Returns</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Customer Support</h3>
        <p className="mt-2 text-sm">WhatsApp Support</p>
        <p className="text-sm">Contact Us</p>
      </div>

      <div>
        <h3 className="font-bold">Social & Trust</h3>
        <p className="mt-2 text-sm">Instagram</p>
        <p className="text-sm">Facebook</p>
        <p className="text-sm mt-2">Review Us (QR)</p>
      </div>

    </footer>
  );
}

export default Footer;
