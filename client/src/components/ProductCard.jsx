import toast from "react-hot-toast";
import { useCart } from "../services/cart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-contain mb-4"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-maroon font-bold mt-1">₹{product.price}</p>

      <button
  onClick={() => {
    addToCart(product);
    toast.success("Added to cart ✅");
  }}
  className="bg-maroon text-white px-6 py-2 rounded-full"
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;
