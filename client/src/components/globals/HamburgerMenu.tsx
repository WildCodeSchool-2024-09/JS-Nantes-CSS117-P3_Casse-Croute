import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <Hamburger size={40} toggled={open} toggle={setOpen} />
      {open && (
        <div className="open-menu">
          <header className="menu-wrapper">
            <Hamburger size={40} toggled={open} toggle={setOpen} />
          </header>
          <ul className="category-list">
            <li>
              <Link to="/">Catégorie 1</Link>
            </li>
            <li>
              <Link to="/">Catégorie 2</Link>
            </li>
            <li>
              <Link to="/">Catégorie 3</Link>
            </li>
            <li>
              <Link to="/">Catégorie 4</Link>
            </li>
            <li>
              <Link to="/">Catégorie 5</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
