import { Link } from "react-router-dom";

function CategoryCard({ title, image, link }) {
  return (
    <Link to={link}>
      {/* <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"> */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
