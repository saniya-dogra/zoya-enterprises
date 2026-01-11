import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-maroon text-white text-center py-24">
        <h1 className="text-4xl font-bold">
          Premium Quality for Every Stage of Life
        </h1>
        <button className="mt-8 bg-white text-maroon px-8 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <CategoryCard title="Kids & Middle School" />
        <CategoryCard title="High School & College" />
        <CategoryCard title="Corporate Wear" />
        <CategoryCard title="Accessories" />
      </section>

    </div>
  );
}

export default Home;
