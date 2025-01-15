import "../styles/VerticalRecipeCard.css";
import "../styles/Global.css";

function VerticalRecipeCard() {
  return (
    <article className="recipe-container">
      <div className="img-container">
        <img
          className="circular-img"
          src="https://img.cuisineaz.com/660x495/2018/03/19/i137285-saute-de-porc-a-l-ananas-fait-maison.jpeg"
          alt="/"
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
            <div className="circle time">
              <img src="" alt="" />
            </div>
            <p>30 min</p>
          </li>
          <li>
            <div className="circle difficulty " />
            <p>Easy</p>
          </li>
          <li>
            <div className="circle type" />
            <p>Main course</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default VerticalRecipeCard;
