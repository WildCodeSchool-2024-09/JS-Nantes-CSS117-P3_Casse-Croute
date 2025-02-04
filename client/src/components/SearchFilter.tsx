import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { RecipeI } from "../types/RecipeValues";
import "../styles/SearchFilter.css";

function SearchFilter() {
  const [letters, setLetters] = useState("");
  const [recipes, setRecipes] = useState<RecipeI[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recette`,
        );
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
      }
    };

    fetchRecipes();
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLetters(e.target.value);
  }

  const filteredArray =
    letters !== ""
      ? recipes?.filter((el) =>
          el.titre.toLowerCase().includes(letters.toLowerCase()),
        )
      : [];

  return (
    <div className="search-filter-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search for a recipe..."
          id="search-bar"
          className="input-header"
          onChange={handleChange}
        />
      </div>
      <section className="results-section">
        {filteredArray && filteredArray.length > 0 ? (
          <div className="results">
            {filteredArray.map((recipe: RecipeI) => (
              <div key={recipe.id} className="recipe-results">
                {recipe.titre}
              </div>
            ))}
          </div>
        ) : (
          letters !== "" && (
            <figure className="no-result">
              <p>Aucune recette trouvée pour "{letters}"</p>
            </figure>
          )
        )}
      </section>
    </div>
  );
}

export default SearchFilter;
