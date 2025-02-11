import "../styles/recipe-by-id-header.css";
import type { Recette } from "../types/RecetteByID";

interface RecipeByIdHeaderProps {
  recette: Recette;
}

function RecipeByIdHeader({ recette }: RecipeByIdHeaderProps) {
  // Calcul de la note moyenne des avis
  const moyenneAvis =
    recette.commentaires.length > 0
      ? recette.commentaires.reduce((acc, avis) => acc + avis.note, 0) /
        recette.commentaires.length
      : 0;

  return (
    <article className="recipe-header-container">
      {/* Titre */}
      <section className="recipe-title-section">
        <h1 className="recipe-title">{recette.titre}</h1>
      </section>

      {/* Barre de navigation */}
      <nav className="recipe-nav">
        <ul className="recipe-nav-list">
          <li>
            <a href="#description">Description</a>
          </li>
          <li>
            <a href="#ingredients">Ingrédients</a>
          </li>
          <li>
            <a href="#preparation">Préparation</a>
          </li>
          <li>
            <a href="#commentaire">Avis</a>
          </li>
        </ul>
      </nav>

      {/* Image principale */}
      <div className="image-rating">
        <img
          src={recette.image_url || "path/to/default.jpg"}
          alt={recette.titre}
        />
        <div>.</div> {/* Barre bleue sous l'image */}
        {/* Note et avis */}
        <section className="recipe-rating">
          <article>
            <span>{moyenneAvis.toFixed(1)}</span>
            <div>
              {"★".repeat(Math.round(moyenneAvis)) +
                "☆".repeat(5 - Math.round(moyenneAvis))}
            </div>
            <span>{recette.commentaires.length} avis</span>
          </article>
        </section>
      </div>
    </article>
  );
}

export default RecipeByIdHeader;
