import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function Category() {
  const { category } = useParams();
  const items = products[category] || [];

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
            item.gender === "all" ||
            item.gender === "unisex"
        );

  return (
    <div className="bg-slate-50 min-h-screen px-4 md:px-10 py-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-4xl font-bold text-[#1f2a38] capitalize tracking-wide">
          {category.replace("-", " ")}
        </h1>

        <Link
          to="/"
          className="text-[#1f2a38] font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl mb-8 text-center font-bold text-[#1f2a38] shadow-sm">
        🛍️ Collection
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT FILTER */}
        <div className="lg:w-64 w-full">
          <div className="lg:sticky lg:top-28">
            <FilterSidebar
              gender={gender}
              setGender={setGender}
            />
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found for selected filters.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Category;
