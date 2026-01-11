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
  image="https://images.unsplash.com/photo-1598033129183-c4f50c736f10"
  link="/category/kids"
/>

<CategoryCard
  title="High School & College"
  image="https://images.unsplash.com/photo-1520975867597-0f47c4b9a77c"
  link="/category/highschool"
/>

<CategoryCard
  title="Corporate Wear"
  image="https://images.unsplash.com/photo-1521334884684-d80222895322"
  link="/category/corporate"
/>

<CategoryCard
  title="Accessories"
  image="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  link="/category/accessories"
/>


        </div>
      </section>

    </div>
  );
}

export default Home;
