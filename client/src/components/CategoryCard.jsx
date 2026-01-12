import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, link }) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer">
        
        {/* IMAGE */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* TEXT */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}

