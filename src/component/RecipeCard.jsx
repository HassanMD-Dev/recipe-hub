import React from "react";
import { motion } from "motion/react";

const RecipeCard = ({ meal, onViewDetails }) => {
  //   const { label, image, source, url } = meal;
  return (
    <motion.div
      initial={{ opcity: 0, y: 20 }}
      animate={{ opcity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-slate-800  rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {meal.strCategory}
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {meal.strArea} Dish
        </span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-1 mb-4 line-clamp-1">
          {meal.strMeal}
        </h3>

        <div className="flex gap-2">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-red-600 text-white py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors text-sm"
          >
            Video
          </a>
          <button
            onClick={onViewDetails}
            className="flex-1 text-center bg-gray-100 text-gray-800 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
