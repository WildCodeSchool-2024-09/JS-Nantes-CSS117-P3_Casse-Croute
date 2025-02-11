import type { Avis } from "../types/RecetteByID";
import "../styles/recipe-comments.css";

interface RecipeCommentsProps {
  commentaires?: Avis[];
}

const RecipeComments: React.FC<RecipeCommentsProps> = ({
  commentaires = [],
}) => {
  if (commentaires.length === 0) {
    return <p>Aucun avis pour cette recette.</p>;
  }

  return (
    <section className="recipe-comments">
      <h2>Avis</h2>
      <ul>
        {commentaires.map((avis) => (
          <li key={avis.id} className="comment-card">
            <div className="comment-header">
              <img
                src={
                  avis.photo_profil || "/assets/images/divers/user-default.png"
                }
                alt={avis.utilisateur}
                className="user-avatar"
              />
              <div>
                <strong>{avis.utilisateur}</strong>
                <p className="comment-date">
                  {new Date(avis.date_avis).toLocaleDateString()}
                </p>
              </div>
              <span className="comment-note">{avis.note.toFixed(1)}</span>
            </div>
            <p className="comment-text">
              <em>“{avis.commentaire}”</em>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeComments;
