import "../styles/toprecipes.css";

const topCard = [
  {
    id: 1,
    top: "TOP 1",
    image: "./assets/images/image-TOP1.jpg",
    alt: "échine de porc confite, purée d’oignon et pommes de terre",
  },
  {
    id: 2,
    top: "TOP 2",
    image: "./assets/images/image-TOP2.jpg",
    alt: "Patte à la bolognaise accompagnée de ses épices",
  },
  {
    id: 3,
    top: "TOP 3",
    image: "./assets/images/image-TOP3.jpg",
    alt: "Pav bhaji, à base de curry de légumes épicé épais servi avec un petit pain beurré moelleux",
  },
  {
    id: 4,
    top: "TOP 4",
    image: "./assets/images/image-TOP4.jpg",
    alt: "Délicieux gyoza accompagné de sa sauce épicée",
  },
  {
    id: 5,
    top: "TOP 5",
    image: "./assets/images/image-TOP5.jpg",
    alt: "Tour de pancakes avec son sirop d'érable et ses fruits sur le dessus",
  },
];

function TopRecipes() {
  return (
    <>
      <section className="container-titre">
        <h2>Les recettes les mieux notées ce mois-ci</h2>
      </section>
      {topCard.map((el) => {
        return (
          <picture key={el.id} className="container-podium">
            <h3>{el.top}</h3>
            <img src={el.image} alt={el.alt} />
          </picture>
        );
      })}
    </>
  );
}
export default TopRecipes;
