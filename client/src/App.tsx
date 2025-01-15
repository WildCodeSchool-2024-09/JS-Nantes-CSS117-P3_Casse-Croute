import { Link, Outlet } from "react-router-dom";
import "./App.css";
import TopRecipes from "./components/TopRecipes";
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
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/view-profile">Voir Profile</Link>
      </nav>
      <main>
        <Outlet />
        <TopRecipes />
      </main>
    </>
  );
}

export default App;
