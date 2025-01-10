import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/creerRecette">Create Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/voirProfil">Voir Profile</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
