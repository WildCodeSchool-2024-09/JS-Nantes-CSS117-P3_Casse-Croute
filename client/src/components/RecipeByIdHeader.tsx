import "../styles/recipe-by-id-header.css";

function RecipeByIdHeader() {
  return (
    <article className="recipe-header-container">
      {/* Titre */}
      <section className="recipe-title-section">
        <h1 className="recipe-title">Magret de canard au four</h1>
      </section>

      {/* Barre de navigation */}
      <nav className="recipe-nav">
        <ul className="recipe-nav-list">
          <li>
            <a href="#description">Description</a>
          </li>
          <li>
            <a href="#ingredients">Ingrédients</a>
          </li>
          <li>
            <a href="#preparation">Préparation</a>
          </li>
          <li>
            <a href="#reviews">Avis</a>
          </li>
        </ul>
      </nav>

      {/* Image principale */}

      <div className="image-rating">
        <img
          src="https://images.unsplash.com/photo-1582391123232-6130296f1fcd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm91cnJpdHVyZSUyMG1hZ3JldCUyMGRlJTIwY2FuYXJkfGVufDB8fDB8fHww"
          alt="Magret de canard au four"
        />
        {/*sert à l'affichage d'une barre bleu sous la photo*/}
        <div>.</div>
        {/* Note et avis */}
        <section className="recipe-rating">
          <article>
            <span>4.5</span>
            <div>★★★★☆</div>
            <span>3 avis</span>
          </article>
        </section>
      </div>
    </article>
  );
}

export default RecipeByIdHeader;
