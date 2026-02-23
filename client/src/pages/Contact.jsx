function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen px-3 sm:px-4 md:px-10 py-8 md:py-16">

      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-10 text-center">
          Contact Us
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* LEFT — CONTACT INFO */}
          <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Get in Touch
            </h2>

            <p className="text-gray-600 text-sm md:text-base">
              Have questions or need help? Reach out to Zoya Enterprises.
            </p>

            <div><strong>Email:</strong> support@zoyaenterprises.com</div>
            <div><strong>Phone:</strong> +91 1234567890</div>
            <div><strong>Address:</strong> Srinagar, Jammu & Kashmir</div>

            {/* Extra info blocks */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center text-sm md:text-base">
                🚚 Fast Delivery
              </div>

              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center text-sm md:text-base">
                🔄 Easy Returns
              </div>

              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center text-sm md:text-base">
                🏫 Trusted by Schools
              </div>

              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center text-sm md:text-base">
                🔒 Secure Payments
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-5 md:mb-6">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 text-sm md:text-base"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 text-sm md:text-base"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3 text-sm md:text-base"
              />

              <button
                type="submit"
                className="w-full bg-[#1f2a38] text-white py-3 rounded-lg hover:bg-[#16202c] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;