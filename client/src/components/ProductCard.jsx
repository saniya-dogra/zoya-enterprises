function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover rounded-t-xl"
      />

      <div className="p-4 text-center">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-maroon font-bold mt-2">₹{product.price}</p>

        <button className="mt-3 bg-maroon text-white px-4 py-2 rounded-full text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
