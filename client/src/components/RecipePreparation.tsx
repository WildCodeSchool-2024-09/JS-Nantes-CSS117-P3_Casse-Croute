import type { RecipePrepaProps } from "../types/RecetteByID";
import "../styles/recipe-preparation.css";

const difficulties = [
  {
    id: "facile",
    label: "Facile",
    image: "/assets/images/level-difficult/icon-easy.png",
  },
  {
    id: "moyen",
    label: "Moyen",
    image: "/assets/images/level-difficult/icon-medium.png",
  },
  {
    id: "difficile",
    label: "Difficile",
    image: "/assets/images/level-difficult/icon-difficult.png",
  },
];

const recipeTypes = [
  {
    id: "entrée",
    label: "Entrée",
    image: "/assets/images/types-dishes/entrance.png",
  },
  {
    id: "plat",
    label: "Plat",
    image: "/assets/images/types-dishes/dishes.png",
  },
  {
    id: "dessert",
    label: "Dessert",
    image: "/assets/images/types-dishes/dessert.png",
  },
  {
    id: "boisson",
    label: "Boisson",
    image: "/assets/images/types-dishes/drinks.png",
  },
];

const RecipePrepa: React.FC<RecipePrepaProps> = ({
  steps,
  tempsPreparation,
  difficulte,
  typeRecette,
}) => {
  if (!tempsPreparation) {
    return <p>⚠️ Temps de préparation non disponible</p>;
  }

  return (
    <section className="recipe-details">
      <article>
        <h2>Temps de cuisson</h2>
        <div className="cooking-time">
          <div>
            <span>{tempsPreparation.heure}</span>
            <span>H</span>
          </div>
          <div>
            <span>{tempsPreparation.minute}</span>
            <span>min</span>
          </div>
        </div>
      </article>

      <article>
        <h2>Difficulté</h2>
        <div className="icon-container">
          {difficulties.map((el) => (
            <div
              key={el.id}
              className={el.id === difficulte.toLowerCase() ? "active" : ""}
            >
              <img src={el.image} alt={el.label} />
              <span>{el.label}</span>
            </div>
          ))}
        </div>
      </article>

      <article>
        <h2>Type de recette</h2>
        <div className="icon-container">
          {recipeTypes.map((el) => (
            <div
              key={el.id}
              className={el.id === typeRecette.toLowerCase() ? "active" : ""}
            >
              <img src={el.image} alt={el.label} />
              <span>{el.label}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="preparation-section">
        <h2>Préparation</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={step.id} className="preparation-step">
              <h3>Étape {index + 1}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default RecipePrepa;
