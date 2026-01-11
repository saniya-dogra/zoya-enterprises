function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-charcoal">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;
