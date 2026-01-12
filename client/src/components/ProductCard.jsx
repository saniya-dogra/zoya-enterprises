import { addToCart } from "../services/cart";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover rounded-lg mb-4"
      />

      <h3 className="font-semibold text-lg text-center">
        {product.name}
      </h3>

      <p className="text-maroon font-bold mt-1">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-maroon text-white px-5 py-2 rounded-full hover:opacity-90"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

