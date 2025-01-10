import { Link, Outlet } from "react-router-dom";
import "./App.css";
// import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/account">Account</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/creerRecette">Create Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/voirProfil">Voir Profile</Link>
      </nav>
      {/* <SearchFilter /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
