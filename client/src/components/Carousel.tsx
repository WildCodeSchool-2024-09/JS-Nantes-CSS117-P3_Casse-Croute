import { useEffect, useState } from "react";

const carousel = [
  {
    id: "point1",
    image: "/assets/images/carousel-recipes/image-1-carousel.jpg",
    alt: "sauté de légumes",
  },
  {
    id: "point2",
    image: "/assets/images/carousel-recipes/image-2-carousel.jpg",
    alt: "yaourt aux noix, framboise et mûre",
  },
  {
    id: "point3",
    image: "/assets/images/carousel-recipes/image-3-carousel.jpg",
    alt: "Des ribs accompagnés de frites et sa sauce barbecue",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfinite = () => {
    if (currentIndex === carousel.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfinite();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section className="home-recipe-week">
        <h2>idée de recette de la semaine</h2>
      </section>
      <section className="container-carousel">
        <ul className="carousel-items">
          {carousel.map((el) => {
            return (
              <li
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                key={el.id}
                id={el.id}
                className="carousel-item"
              >
                <div className="slide-item">
                  <img src={el.image} alt={el.alt} />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="container-points">
        <ul className="first-carousel">
          <a href="#point1">
            <li>.</li>
          </a>
          <a href="#point2">
            <li>.</li>
          </a>
          <a href="#point3">
            <li>.</li>
          </a>
        </ul>
      </section>
    </>
  );
}

export default Carousel;
