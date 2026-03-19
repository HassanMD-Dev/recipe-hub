import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import RecipeCard from "./component/RecipeCard";
import Loading from "./component/Loading";
import Categories from "./component/Categories";
import RecipeModal from "./component/RecipeModal";
import Footer from "./component/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Chicken");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setIsLoading(false);
    };
    fetchRecipes();
  }, [query]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar
        onSearch={(text) => setQuery(text)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="container mx-auto">
        <Categories setSelectedCategories={(cat) => setQuery(cat)} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-500 mb-8">
              Showing results for:{" "}
              <span className="text-orange-500 capitalize">{query}</span>
            </h2>

            {recipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {recipes.map((item) => (
                  <RecipeCard
                    key={item.idMeal}
                    meal={item}
                    onViewDetails={() => setSelectedMeal(item)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-xl italic">
                  No recipes found. Try Searching for "Beef" or "Cake"!
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
      {selectedMeal && (
        <RecipeModal
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}

export default App;
