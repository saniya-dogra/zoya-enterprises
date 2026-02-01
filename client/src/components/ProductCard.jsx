import toast from "react-hot-toast";
import { useCart } from "../services/cart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-white rounded-xl shadow-md p-4 text-center
        hover:shadow-2xl hover:-translate-y-2
        transition duration-300 cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* PRICE */}
      <p className="text-[#1f2a38] font-bold mt-1 text-lg">
        ₹{product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart ✅");
        }}
        className="
          mt-3 px-6 py-2 rounded-full text-white font-medium
          bg-[#1f2a38] hover:bg-[#2f4159]
          transition duration-300 hover:scale-105
          shadow-md
        "
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
