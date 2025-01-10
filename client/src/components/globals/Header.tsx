import "../../styles/Header.css";
import "../../styles/Global.css";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header>
      <nav main-nav>
        <ul>
          <li>
            <HamburgerMenu />
          </li>
          <li>
            <Link to="/">
              <img
                className="logo-header"
                src="http://localhost:3310/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <button className="identify" type="button">
              S'identifier
            </button>
          </li>
        </ul>
        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Recherchez votre recette"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
