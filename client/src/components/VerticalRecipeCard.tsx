import "../styles/VerticalRecipeCard.css";

function VerticalRecipeCard() {
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
        <h1 className="title">Mead glazed ham</h1>
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
            <p>30 min</p>
          </li>
          <li>
            <div className="circle">
              <img
                className="difficulty"
                src="assets/images/level-difficult/icon-difficult.png"
                alt="logo indiquant un niveau de difficulté"
              />{" "}
            </div>
            <p>Easy</p>
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
            <p>Main course</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default VerticalRecipeCard;
