import { NavLink } from "react-router-dom";
import "../../styles/not-found.css";

function NotFound() {
  return (
    <section className="container-not-found">
      <picture>
        <img src="assets/images/not-found.png" alt="" />
      </picture>
      <article>
        <h1>Ooooops...</h1>
        <p>Cette page est introuvable.</p>
        <NavLink to="/">Retournez sur la page d'accueil...</NavLink>
      </article>
    </section>
  );
}

export default NotFound;
