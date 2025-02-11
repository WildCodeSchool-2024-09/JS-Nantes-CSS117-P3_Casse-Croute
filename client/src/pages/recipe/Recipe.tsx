import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeByIDHeader from "../../components/RecipeByIdHeader";
import RecipeComments from "../../components/RecipeComments";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipePrepa from "../../components/RecipePreparation";
import RecipeDescription from "../../components/RicipeDescription";
import type { Recette } from "../../types/RecetteByID";
import "./recipe.css";

function Recipe() {
  const { id } = useParams();
  const [recette, setRecette] = useState<Recette | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecette = async () => {
      if (!id) {
        setError("ID non défini");
        return;
      }

      const parsedId = Number(id);
      if (Number.isNaN(parsedId)) {
        setError("ID invalide");
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recette/${parsedId}`,
        );
        if (!response.ok) throw new Error("Erreur de chargement");
        const data: Recette = await response.json();

        setRecette(data);
      } catch (err) {
        setError("❌ Erreur de chargement de la recette.");
        console.error(err);
      }
    };

    fetchRecette();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!recette) return <p>Chargement...</p>;

  return (
    <>
      <RecipeByIDHeader recette={recette} />

      <article id="description" className="container-recipe-description">
        <RecipeDescription description={recette.description} />
      </article>

      <section className="container-recipe-ingredient-preparation">
        <article id="ingredients">
          <RecipeIngredients ingredients={recette.ingredients} />
        </article>

        <article id="preparation">
          <RecipePrepa
            steps={recette.etapes}
            tempsPreparation={recette.tempsPreparation}
            difficulte={recette.difficulte}
            typeRecette={recette.typeRecette}
          />
        </article>
      </section>

      <section id="commentaire">
        <RecipeComments commentaires={recette.commentaires} />
      </section>
    </>
  );
}

export default Recipe;
