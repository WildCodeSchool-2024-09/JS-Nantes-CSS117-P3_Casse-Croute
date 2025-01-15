import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/globals/Header";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/account">Compte</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/viewp-profile">Voir Profile</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
