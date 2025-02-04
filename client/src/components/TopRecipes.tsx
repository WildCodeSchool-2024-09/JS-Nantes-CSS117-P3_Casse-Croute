import "../styles/top-recipes.css";

const topCard = [
  {
    id: 1,
    titre: "top1",
    top: "TOP 1",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Big Burger salade tomate oignon sauce faite maison à base de miel",
  },
  {
    id: 2,
    titre: "top2",
    top: "TOP 2",
    image: "./assets/images/top-recipes/image-TOP2.jpg",
    alt: "Patte à la bolognaise accompagnée de ses épices",
  },
  {
    id: 3,
    titre: "top3",
    top: "TOP 3",
    image: "./assets/images/top-recipes/image-TOP3.jpg",
    alt: "Pav bhaji, à base de curry de légumes épicé épais servi avec un petit pain beurré moelleux",
  },
  {
    id: 4,
    titre: "top4",
    top: "TOP 4",
    image:
      "https://media.istockphoto.com/id/547025850/fr/photo/soupe-%C3%A0-loignon-avec-pain-sec-et-fromage-vue-de-dessus.jpg?s=612x612&w=0&k=20&c=3Xkabw0JuWllPM9ldj223Y6CN5ewMDfYS9wh6lWdjWU=",
    alt: "Délicieux gyoza accompagné de sa sauce épicée",
  },
  {
    id: 5,
    titre: "top5",
    top: "TOP 5",
    image: "./assets/images/top-recipes/image-TOP5.jpg",
    alt: "Tour de pancakes avec son sirop d'érable et ses fruits sur le dessus",
  },
];

function TopRecipes() {
  return (
    <>
      <section className="container-title-home">
        <h2>Les recettes les mieux notées ce mois-ci</h2>
      </section>
      <div className="top-recipes-container">
        {topCard.map((el) => {
          return (
            <picture key={el.id} id={el.titre} className="top-rank">
              <h3>{el.top}</h3>
              <img src={el.image} alt={el.alt} />
            </picture>
          );
        })}
      </div>
    </>
  );
}
export default TopRecipes;
