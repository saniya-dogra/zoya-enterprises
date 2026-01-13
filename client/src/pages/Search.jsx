import { useLocation, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const q = query.toLowerCase().trim();

  // ✅ Convert products object -> single array
  const allProducts = Object.values(products).flat();

  // ✅ Filter by name
  const results = allProducts.filter((item) =>
    item.name.toLowerCase().includes(q)
  );

  return (
    <div className="bg-beige min-h-screen px-10 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-maroon">Search Results</h1>
          <p className="text-gray-600 mt-1">
            Showing results for: <span className="font-semibold">{query}</span>
          </p>
        </div>

        <Link to="/" className="text-maroon font-semibold">
          ← Back to Home
        </Link>
      </div>

      {results.length === 0 ? (
        <p className="text-gray-700 text-lg">
          ❌ No products found for "<b>{query}</b>"
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {results.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
