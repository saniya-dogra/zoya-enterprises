function CategoryCard({ title }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition">
      <h3 className="text-lg font-semibold text-charcoal">
        {title}
      </h3>
    </div>
  );
}

export default CategoryCard;
