import Carousel from "../../components/Carousel";
import IngredientsSeason from "../../components/IngredientsSeason";
import RecipesSeason from "../../components/RecipesSeason";
import TopRecipes from "../../components/TopRecipes";
import "./home.css";

function Home() {
  return (
    <>
      <Carousel />
      <TopRecipes />
      <RecipesSeason />
      <IngredientsSeason />
    </>
  );
}

export default Home;
