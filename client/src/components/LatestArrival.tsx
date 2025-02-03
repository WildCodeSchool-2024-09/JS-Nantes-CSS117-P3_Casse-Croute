import VerticalRecipeCard from "./VerticalRecipeCard";
import "../styles/latest-arrival.css";
import { Fragment, useEffect, useState } from "react";
import type { RecipeI } from "../types/RecipeValues";

function LatestArrival() {
  const [recette, setRecette] = useState([] as RecipeI[]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/date-recette`)
      .then((response) => response.json())
      .then((data: RecipeI[]) => {
        setRecette(data);
      });
  }, []);
  return (
    <>
      <section className="container-title-home">
        <h2>Dernier arrivage</h2>
      </section>
      <section className="container-recipes-latest-arrival">
        {recette.map((el) => {
          return (
            <Fragment key={el.id}>
              <VerticalRecipeCard
                temps_id={el.temps_id}
                difficulte_id={el.difficulte_id}
                titre={el.titre}
                type_id={el.type_id}
                description={el.description}
                image_url={el.image_url}
              />
            </Fragment>
          );
        })}
      </section>
    </>
  );
}

export default LatestArrival;
