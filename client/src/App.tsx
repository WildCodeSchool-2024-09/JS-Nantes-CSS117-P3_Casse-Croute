import { Link, Outlet } from "react-router-dom";
import "./App.css";
import VerticalRecipeCard from "./components/VerticalRecipeCard";
import Header from "./components/globals/Header";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/account">Account</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/creerRecette">Create Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/voirProfil">Voir Profile</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <VerticalRecipeCard />
    </>
  );
}

export default App;
