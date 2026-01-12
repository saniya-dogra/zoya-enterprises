import { useLocation } from "react-router-dom";

export default function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase();

  // CATEGORY MAPPING
  const categoryMap = {
    kids: "kids",
    child: "kids",
    school: "kids",
    "middle school": "kids",

    highschool: "highschool",
    college: "highschool",

    corporate: "corporate",
    office: "corporate",

    accessories: "accessories",
    belts: "accessories",
    shoes: "accessories",
  };

  const matchedCategory = categoryMap[query];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold text-maroon">
        Search Results
      </h1>

      {matchedCategory ? (
        <p className="mt-4">
          Redirecting to category: <b>{matchedCategory}</b>
        </p>
      ) : (
        <p className="mt-4 text-gray-500">
          No matching category found.
        </p>
      )}
    </div>
  );
}
