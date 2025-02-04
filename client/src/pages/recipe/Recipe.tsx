import { useEffect, useState } from "react";
import RecipeByIDHeader from "../../components/RecipeByIdHeader";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipePrepa from "../../components/RecipePreparation";
import RecipeDescription from "../../components/RicipeDescription";
import "./recipe.css";
import type { Recette } from "../../types/RecetteByID";

function Recipe() {
  const [recette, setRecette] = useState<Recette | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recette/1`)
      .then((response) => response.json())
      .then((data: Recette) => {
        setRecette(data);
      })
      .catch((error) =>
        console.error("Erreur de chargement de la recette :", error),
      );
  }, []);

  return (
    <>
      <RecipeByIDHeader />

      <section id="description" className="container-recipe-description">
        {recette ? (
          <RecipeDescription description={recette.description} />
        ) : (
          <p>Chargement...</p>
        )}
      </section>

      <section id="ingredients">
        {recette ? (
          <RecipeIngredients ingredients={recette.ingredients} />
        ) : (
          <p>Chargement...</p>
        )}
      </section>

      <section id="preparation">
        {recette ? (
          <RecipePrepa steps={recette.etapes} />
        ) : (
          <p>Chargement...</p>
        )}
      </section>
    </>
  );
}

export default Recipe;
