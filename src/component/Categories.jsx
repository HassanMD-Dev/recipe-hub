import React from "react";

const Categories = ({ setSelectedCategories }) => {
  const categories = [
    "Chicken",
    "Beef",
    "Pasta",
    "Dessert",
    "Seafood",
    "Vegan",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
      {categories.map((cat) => {
        return (
          <button
            key={cat}
            onClick={() => setSelectedCategories(cat)}
            className="px-6 py-2 mt-6 rounded-full border border-orange-200 dark:border-slate-700 text-orange-600 dark:text-orange-400 font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm dark:bg-slate-800"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
