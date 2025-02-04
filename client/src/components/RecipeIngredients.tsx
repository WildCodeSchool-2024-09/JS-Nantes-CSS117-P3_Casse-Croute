import type { IngredientRecette } from "../types/RecetteByID";
import "../styles/recipe-ingredients.css";

interface RecipeIngredientsProps {
  ingredients: IngredientRecette[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  ingredients,
}) => {
  return (
    <>
      <section className="container-ingredient">
        <h2>Ingrédients</h2>
      </section>
      <section className="container-recipe-ingredients">
        <ul>
          {ingredients.map((el) => (
            <li key={el.ingredient.id}>
              <figure>
                <img
                  src={el.ingredient.icone_categorie || "path/to/default.png"}
                  alt={el.ingredient.nom}
                />
                <figcaption>
                  {el.ingredient.nom} - {el.quantite} {el.unite}
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
