import "../pages/ViewProfile/ViewProfile.css";
import type { RecipeH } from "../types/RecipeValues";
function HorizontalRecipeCard({ titre, description, image_url }: RecipeH) {
  return (
    <main className="horizontal-card">
      <header>
        <button type="button">
          <img
            src="../../public/assets/images/editIcon.png"
            alt="edit button"
          />
        </button>
        <h2>Mead glazed ham</h2>
      </header>
      <figure>
        <img src={image_url} alt={titre} />
        <figcaption>{description}</figcaption>
      </figure>
    </main>
  );
}
export default HorizontalRecipeCard;
