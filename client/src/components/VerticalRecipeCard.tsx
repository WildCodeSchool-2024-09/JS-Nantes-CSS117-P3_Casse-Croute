import "../styles/VerticalRecipeCard.css";

interface RecipeCardI {
  name: string;
  time: string;
  difficulty: string;
  type: string;
}

function VerticalRecipeCard({ name, time, difficulty, type }: RecipeCardI) {
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
        <h1 className="title">{name}</h1>
        <p className="description">
          Cider brined roast chicken, seasoned with frash orange and herbs and a
          reduced cider maple glaze
        </p>

        <ul>
          <li>
            <div className="circle">
              <img
                className="time"
                src="../../public/assets/images/icone-horloge.png"
                alt="logo horloge"
              />
            </div>
            <p>{time}</p>
          </li>
          <li>
            <div className="circle">
              <img
                className="difficulty"
                src="../../public/assets/images/icone-difficulty.png"
                alt="logo indiquant un niveau de difficulté"
              />{" "}
            </div>
            <p>{difficulty}</p>
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
            <p>{type}</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default VerticalRecipeCard;
