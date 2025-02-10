import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/globals/Footer";
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
        <Link to="/view-profile">Voir Profile</Link>
      </nav>
      <ToastContainer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
