import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();
  const items = products[category] || [];

  const [gender, setGender] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // ✅ filter logic
  const filteredItems = items.filter(
    (item) => gender === "all" || item.gender === gender || item.gender === "all"
  );

  return (
    <div className="bg-beige min-h-screen px-4 md:px-10 py-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-maroon capitalize">
          {category.replace("-", " ")}
        </h1>

        <Link to="/" className="text-maroon font-semibold">
          ← Back to Home
        </Link>
      </div>

      {/* ✅ Gender Filter Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["all", "boys", "girls"].map((g) => (
          <button
            key={g}
            onClick={() => setGender(g)}
            className={`px-4 py-2 rounded-full border font-semibold transition
              ${gender === g
                ? "bg-blue-700 text-white"
                : "bg-white hover:bg-gray-100"}`}
          >
            {g.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ✅ Section Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-5 rounded-xl mb-8 text-center font-bold">
        {gender === "boys" && "👦 Boys Collection"}
        {gender === "girls" && "👧 Girls Collection"}
        {gender === "all" && "🛍️ All Products"}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
}

export default Category;
