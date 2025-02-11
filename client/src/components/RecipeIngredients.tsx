import type { IngredientRecette } from "../types/RecetteByID";
import "../styles/recipe-ingredients.css";

interface RecipeIngredientsProps {
  ingredients: IngredientRecette[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  ingredients,
}) => {
  if (!ingredients || ingredients.length === 0) {
    return <p>Aucun ingrédient disponible.</p>;
  }

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src =
      "/assets/images/ingredients/ingredient-default.png";
    event.currentTarget.onerror = null;
  };

  return (
    <>
      <section className="container-ingredient">
        <h2>Ingrédients</h2>
      </section>
      <section className="container-recipe-ingredients">
        <ul>
          {ingredients.map((el, index) => (
            <li key={el.id || index}>
              <figure>
                <img
                  src={
                    el.icone_categorie ||
                    "/assets/images/ingredients/ingredient-default.png"
                  }
                  alt={el.nom}
                  onError={handleImageError}
                />
                <figcaption>
                  {el.nom} - {el.quantite} {el.unite}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RecipeIngredients;
