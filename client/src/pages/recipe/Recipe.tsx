import RecipeByIDHeader from "../../components/RecipeByIdHeader";
import RecipeIngredients from "../../components/RecipeIngredients";
import Description from "../../components/RicipeDescription";
import "./recipe.css";

function Recipe() {
  return (
    <>
      <RecipeByIDHeader />

      {/* Sections ancrées */}
      <section id="description" className="container-recipe-description">
        <Description />
      </section>

      <section id="ingredients">
        <RecipeIngredients />
      </section>

      {/* <section id="preparation">
        <Preparation />
      </section> */}

      {/* <section id="reviews">
        <Reviews />
      </section> */}
    </>
  );
}

export default Recipe;
