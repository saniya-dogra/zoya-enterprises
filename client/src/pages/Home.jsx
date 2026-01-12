import HeroSlider from "../components/HeroSlider";
import CategoryCard from "../components/CategoryCard";

import kidsImg from "../assets/hero-kids.png";
import highImg from "../assets/hero-highschool.jpeg";
import corporateImg from "../assets/hero-corporate.jpeg";
import accessoriesImg from "../assets/hero-accessories.png";


export default function Home() {
  const categories = [
  {
    title: "Kids & Middle School",
    image: kidsImg,
    link: "/category/kids",
  },
  {
    title: "High School",
    image: highImg,
    link: "/category/highschool",
  },
  {
    title: "Corporate Wear",
    image: corporateImg,
    link: "/category/corporate",
  },
  {
    title: "Accessories",
    image: accessoriesImg,
    link: "/category/accessories",
  },
];

  return (
    <div className="bg-softwhite">
      <HeroSlider />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    Shop by Category
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {categories.map((cat, index) => (
      <CategoryCard
        key={index}
        title={cat.title}
        image={cat.image}
        link={cat.link}
      />
    ))}
  </div>
</section>

    </div>
  );
}
