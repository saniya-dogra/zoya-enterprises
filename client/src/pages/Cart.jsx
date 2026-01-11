import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="min-h-screen bg-beige px-10 py-16">
      <h1 className="text-3xl font-bold text-maroon mb-6">
        Your Cart
      </h1>

      <p className="text-charcoal mb-6">
        Your cart is currently empty.
      </p>

      <Link
        to="/"
        className="inline-block bg-maroon text-white px-6 py-3 rounded-full"
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}

export default Cart;
