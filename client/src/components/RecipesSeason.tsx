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
          <VerticalRecipeCard
            titre={""}
            temps_id={""}
            difficulte_id={""}
            type_id={""}
            description={""}
          />
        </li>
        <li>
          <VerticalRecipeCard
            titre={""}
            temps_id={""}
            difficulte_id={""}
            type_id={""}
            description={""}
          />
        </li>
        <li>
          <VerticalRecipeCard
            titre={""}
            temps_id={""}
            difficulte_id={""}
            type_id={""}
            description={""}
          />
        </li>
      </ul>
    </article>
  );
}

export default RecipesSeason;
