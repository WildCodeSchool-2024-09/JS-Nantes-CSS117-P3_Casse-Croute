import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/globals/Footer";
import Header from "./components/globals/Header";

function App() {
  return (
    <>
      <Header />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/account">Compte</NavLink>
        <NavLink to="/catalogue">Catalogue</NavLink>
        <NavLink to="/create-recipe">Create Recipe</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/view-profile">Voir Profile</NavLink>
        <NavLink to="/dashboard-admin">Admin</NavLink>
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
