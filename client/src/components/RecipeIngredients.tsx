import "../styles/recipe-ingredients.css";

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

function RecipeIngredients() {
  return (
    <>
      <section className="container-ingredient">
        <h2>Ingrédients</h2>
      </section>
      <section className="container-recipe-ingredients">
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

export default RecipeIngredients;
