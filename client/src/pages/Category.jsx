import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();
  const items = products[category] || [];

  return (
    <div className="bg-beige min-h-screen px-10 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-maroon capitalize">
          {category.replace("-", " ")}
        </h1>

        <Link to="/" className="text-maroon font-semibold">
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
