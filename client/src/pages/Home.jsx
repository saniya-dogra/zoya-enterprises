import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className="bg-softwhite">

      {/* Hero */}
      <section className="bg-maroon text-white text-center py-24">
        <h1 className="text-4xl font-bold">
          Premium Quality for Every Stage of Life
        </h1>
        <button className="mt-8 bg-white text-maroon px-8 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <CategoryCard
            title="Kids & Middle School"
            image="https://images.unsplash.com/photo-1600185365483-26d7f3c6d1b1"
          />

          <CategoryCard
            title="High School & College"
            image="https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
          />

          <CategoryCard
            title="Corporate Wear"
            image="https://images.unsplash.com/photo-1521334884684-d80222895322"
          />

          <CategoryCard
            title="Accessories"
            image="https://images.unsplash.com/photo-1598032895397-b9472444bf93"
          />

        </div>
      </section>

    </div>
  );
}

export default Home;
