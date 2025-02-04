import "../../styles/Header.css";
import "../../styles/Global.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchFilter";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
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
            <button className="identify" type="button">
              S'identifier
            </button>
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
