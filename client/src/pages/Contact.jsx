function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen px-4 md:px-10 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
          Contact Us
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT — CONTACT INFO */}
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-5">
            <h2 className="text-2xl font-bold text-blue-900">
              Get in Touch
            </h2>

            <p className="text-gray-600">
              Have questions or need help? Reach out to Zoya Enterprises.
            </p>

            <div>
              <strong>Email:</strong> support@zoyaenterprises.com
            </div>

            <div>
              <strong>Phone:</strong> +91 1234567890
            </div>

            <div>
              <strong>Address:</strong> Srinagar, Jammu & Kashmir
            </div>

            {/* Extra info blocks */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                🚚 Fast Delivery
              </div>

              <div className="bg-blue-50 p-4 rounded-lg text-center">
                🔄 Easy Returns
              </div>

              <div className="bg-blue-50 p-4 rounded-lg text-center">
                🏫 Trusted by Schools
              </div>

              <div className="bg-blue-50 p-4 rounded-lg text-center">
                🔒 Secure Payments
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3"
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
