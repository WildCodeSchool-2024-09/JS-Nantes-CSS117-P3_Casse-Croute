import "../../styles/Header.css";
import "../../styles/Global.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../pages/context/useAuth";
import SearchBar from "../SearchFilter";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const { isLogged } = useAuth();
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li>
            <HamburgerMenu />
          </li>
          <li>
            <Link to="/">
              <img
                className="logo-header"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </li>
          <li>
            {isLogged === true ? (
              <NavLink to="/view-profile">
                <button className="isLogged-header-true" type="button">
                  <img
                    src="/assets/images/favicon.png"
                    alt="Représentation de l'utilisateur"
                  />
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="isLogged-header-false" type="button">
                  S'identifier
                </button>
              </NavLink>
            )}
          </li>
        </ul>
        <div className="search-container">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
