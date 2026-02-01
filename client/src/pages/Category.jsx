import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function Category() {
  const { category } = useParams();
  const items = products[category] || [];

  // sidebar filter state
  const [gender, setGender] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  /* ---------- FILTER LOGIC ---------- */
  const filteredItems =
    gender.length === 0
      ? items
      : items.filter(
          (item) =>
            gender.includes(item.gender) ||
            item.gender === "all"
        );

  return (
      <div className="bg-slate-50 min-h-screen px-4 md:px-10 py-12">


      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <h1 className="text-4xl font-bold text-blue-900 capitalize tracking-wide">

          {category.replace("-", " ")}
        </h1>

        <Link to="/" className="text-maroon font-semibold">
          ← Back to Home
        </Link>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-5 rounded-xl mb-8 text-center font-bold">
        🛍️ Collection
      </div>

      {/* Main Layout */}
      <div className="flex gap-8">

        {/* LEFT FILTER */}
        <FilterSidebar gender={gender} setGender={setGender} />

        {/* RIGHT PRODUCTS */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Category;
