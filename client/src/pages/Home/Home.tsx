import Carousel from "../../components/Carousel";
import IngredientsSeason from "../../components/IngredientsSeason";
import LatestArrival from "../../components/LatestArrival";
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
      <LatestArrival />
    </>
  );
}

export default Home;
