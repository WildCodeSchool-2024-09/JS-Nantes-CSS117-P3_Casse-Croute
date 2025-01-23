import "../styles/VerticalRecipeCard.css";
import type { RecipeI } from "../types/RecipeValues";

function VerticalRecipeCard({
  titre,
  temps_id,
  difficulte_id,
  type_id,
  description,
}: RecipeI) {
  return (
    <article className="recipe-container">
      <div className="img-container">
        <img
          className="circular-img"
          src="https://img.cuisineaz.com/660x495/2018/03/19/i137285-saute-de-porc-a-l-ananas-fait-maison.jpeg"
          alt="sauté de porc à l'ananas"
        />
      </div>
      <section className="text-container">
        <h1 className="title">{titre}</h1>
        <p className="description">{description}</p>

        <ul>
          <li>
            <div className="circle">
              <img
                className="time"
                src="../../public/assets/images/icone-horloge.png"
                alt="logo horloge"
              />
            </div>
            <p>{temps_id}</p>
          </li>
          <li>
            <div className="circle">
              <img
                className="difficulty"
                src="assets/images/level-difficult/icon-difficult.png"
                alt="logo indiquant un niveau de difficulté"
              />{" "}
            </div>
            <p>{difficulte_id}</p>
          </li>
          <li>
            <div className="circle">
              {" "}
              <img
                className="type"
                src="../../public/assets/images/icone-chicken.png"
                alt="logo d'un poulet cuit"
              />
            </div>
            <p>{type_id}</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default VerticalRecipeCard;
