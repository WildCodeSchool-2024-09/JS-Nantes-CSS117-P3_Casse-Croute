function Carousel() {
  return (
    <>
      <section className="home-recette-semaine">
        <h2>idée de recette de la semaine</h2>
      </section>
      <section className="container-carousel">
        <ul className="carousel-items">
          <li id="point1" className="carousel-item">
            <div className="slide-item">
              <img
                src="/assets/images/carousel-recipes/image-1-carousel.jpg"
                alt="sauté de légumes"
              />
            </div>
          </li>
          <li id="point2" className="carousel-item">
            <div className="slide-item">
              <img
                src="/assets/images/carousel-recipes/image-2-carousel.jpg"
                alt="yaourt aux noix, framboise et mûre"
              />
            </div>
          </li>
          <li id="point3" className="carousel-item">
            <div className="slide-item">
              <img
                src="/assets/images/carousel-recipes/image-3-carousel.jpg"
                alt="Des ribs accompagnés de frites et sa sauce barbecue"
              />
            </div>
          </li>
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
