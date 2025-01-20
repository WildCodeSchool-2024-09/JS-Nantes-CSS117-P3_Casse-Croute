import "../pages/ViewProfile/ViewProfile.css";
function HorizontalRecipeCard() {
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
        <img
          src="https://img.cuisineaz.com/660x495/2018/03/19/i137285-saute-de-porc-a-l-ananas-fait-maison.jpeg"
          alt="sauté de porc à l'ananas"
        />
        <figcaption>
          Cider brined roast chicken, seasoned with frash orange and herbs and a
          reduced cider maple glaze
        </figcaption>
      </figure>
    </main>
  );
}
export default HorizontalRecipeCard;
