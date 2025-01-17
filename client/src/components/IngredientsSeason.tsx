import "../styles/ingredients-saison.css";

const ingredientsSeason = [
  {
    id: "1",
    image: "assets/images/ingredients/chou-frise.png",
    alt: "chou frisé",
    name: "Chou frisé",
  },
  {
    id: "2",
    image: "assets/images/ingredients/citrouille.png",
    alt: "citrouille",
    name: "Citrouille",
  },
  {
    id: "3",
    image: "assets/images/ingredients/chou-rouge.png",
    alt: "chou rouge",
    name: "Chou-rouge",
  },
];

function IngredientsSeason() {
  return (
    <>
      <section className="container-titre">
        <h2>Vos ingrédients de saison</h2>
      </section>
      <section className="container-ingredients-season">
        <ul>
          {ingredientsSeason.map((el) => {
            return (
              <li key={el.id}>
                <figure>
                  <img src={el.image} alt="chou frisé" />
                  <figcaption>{el.name}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default IngredientsSeason;
