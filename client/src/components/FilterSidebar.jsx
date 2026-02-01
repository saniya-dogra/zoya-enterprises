import { useState } from "react";

export default function FilterSidebar({ gender, setGender }) {
  const [open, setOpen] = useState(true);

  const toggleGender = (value) => {
    if (gender.includes(value)) {
      setGender(gender.filter((g) => g !== value));
    } else {
      setGender([...gender, value]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 w-64 h-fit">
      <h2 className="text-lg font-bold mb-4">Filter</h2>

      {/* Gender */}
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between w-full font-semibold mb-3"
        >
          GENDER
          <span>{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div className="space-y-2 text-gray-700">
            {["girls", "boys", "unisex"].map((g) => (
              <label key={g} className="flex gap-2 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gender.includes(g)}
                  onChange={() => toggleGender(g)}
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
