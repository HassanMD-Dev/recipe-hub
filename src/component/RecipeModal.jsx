import React from "react";

const RecipeModal = ({ meal, onClose }) => {
  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,
      );
    }
  }
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transitions-colors"
        >
          ✕
        </button>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            {meal.strMeal}
          </h2>
          <p className="text-orange-500 font-bold mb-6">
            {meal.strCategory} | {meal.strArea}
          </p>

          <h3 className="text-xl font-bold mb-3 border-b pb-2 ">Ingredients</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {ingredients.map((ind, index) => (
              <li
                key={index}
                className="text-gray-600 flex items-start gap-3 text-sm leading-tight"
              >
                {/* Ye sirf chota sa dot hai */}
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-1 flex-shrink-0"></span>

                {/* Text span ke BAHAR hona chahiye */}
                <span>{ind}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mb-3 border-b pb-2">Instructions</h3>
          <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
