import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, link }) {
  return (
    <Link to={link} className="group block">
      <div
        className="
          relative overflow-hidden rounded-xl bg-white
          shadow-md transition-all duration-500
          hover:-translate-y-3 hover:shadow-2xl
          hover:rotate-[0.3deg]
          cursor-pointer
        "
      >
        {/* IMAGE */}
        <div className="h-52 w-full overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="
              h-full w-full object-cover
              transition duration-700
              group-hover:scale-110
              group-hover:-translate-y-2
            "
          />

          {/* Gradient reveal */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-black/10 to-transparent
              opacity-0 group-hover:opacity-100
              transition duration-500
            "
          />
        </div>

        {/* TEXT */}
        <div className="p-4 text-center relative overflow-hidden">
          <h3
            className="
              text-lg font-semibold text-gray-800
              transition duration-500
              group-hover:text-blue-600
              group-hover:-translate-y-1
            "
          >
            {title}
          </h3>

          {/* Animated underline */}
          <div
            className="
              h-[2px] w-0 bg-blue-600 mx-auto mt-2
              group-hover:w-16 transition-all duration-500
            "
          />
        </div>

        {/* Glow border */}
        <div
          className="
            absolute inset-0 rounded-xl
            ring-0 group-hover:ring-2 ring-blue-500/30
            transition duration-500
          "
        />
      </div>
    </Link>
  );
}
