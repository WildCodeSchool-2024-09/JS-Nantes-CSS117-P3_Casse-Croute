import VerticalRecipeCard from "./VerticalRecipeCard";
import "../styles/recipes-season.css";

function RecipesSeason() {
  return (
    <article className="container-recipes-season">
      <section>
        <h2>Vos Recettes de saison</h2>
      </section>
      <ul>
        <li>
          <VerticalRecipeCard />
        </li>
        <li>
          <VerticalRecipeCard />
        </li>
        <li>
          <VerticalRecipeCard />
        </li>
      </ul>
    </article>
  );
}

export default RecipesSeason;
