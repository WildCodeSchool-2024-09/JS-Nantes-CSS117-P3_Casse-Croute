import { Link, Outlet } from "react-router-dom";
import "./App.css";
import VerticalRecipeCard from "./components/VerticalRecipeCard";
import Header from "./components/globals/Header";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/account">Compte</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/createRecipe">Créer une recette</Link>
        <Link to="/login">Inscription</Link>
        <Link to="/profile">Voir Profil</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <VerticalRecipeCard />
    </>
  );
}

export default App;
