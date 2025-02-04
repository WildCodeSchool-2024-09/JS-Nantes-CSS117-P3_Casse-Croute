import type { EtapePreparation } from "../types/RecetteByID";
import "../styles/recipe-preparation.css";

interface RecipePrepaProps {
  steps: EtapePreparation[];
}

const RecipePrepa: React.FC<RecipePrepaProps> = ({ steps }) => {
  return (
    <div className="recipe-details">
      <section className="preparation">
        <h2>Préparation</h2>
        {steps.map((step, index) => (
          <div key={step.id}>
            <h3>Étape {index + 1}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RecipePrepa;
