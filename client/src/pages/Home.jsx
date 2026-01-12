import HeroSlider from "../components/HeroSlider";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <div className="bg-softwhite">
      <HeroSlider />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <CategoryCard title="Kids & Middle School" />
          <CategoryCard title="High School" />
          <CategoryCard title="Corporate Wear" />
          <CategoryCard title="Accessories" />
        </div>
      </section>
    </div>
  );
}
