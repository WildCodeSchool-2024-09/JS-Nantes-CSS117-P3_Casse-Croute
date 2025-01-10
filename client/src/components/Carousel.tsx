function Carousel() {
  return (
    <>
      <section className="home-recette-semaine">
        <h2>idée de recette de la semaine</h2>
      </section>
      <section className="container-carousel">
        <ul className="carousel-items">
          <li className="carousel-item">
            <div id="point1" className="slide-item">
              <img
                src="/src/public/assets/images/image-1-carousel.jpg"
                alt=""
              />
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
            </div>
          </li>
          <li className="carousel-item">
            <div id="point2" className="slide-item">
              <img
                src="/src/public/assets/images/image-2-carousell.jpg"
                alt=""
              />
              <section className="container-points">
                <ul className="second-carousel">
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
            </div>
          </li>
          <li className="carousel-item">
            <div id="point3" className="slide-item">
              <img
                src="/src/public/assets/images/image-3-carousel.jpg"
                alt=""
              />
              <section className="container-points">
                <ul className="third-carousel">
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
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Carousel;
