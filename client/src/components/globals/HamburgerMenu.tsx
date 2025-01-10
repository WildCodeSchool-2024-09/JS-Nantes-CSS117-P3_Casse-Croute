import Hamburger from "hamburger-react";
import { useState } from "react";
import "../../styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hamburger size={40} toggled={open} toggle={setOpen} />
      {open && (
        <div className="open-menu">
          <header className="menu-wrapper">
            <Hamburger size={40} toggled={open} toggle={setOpen} />
          </header>
          <ul className="category-list">
            <li>Catégorie 1</li>
            <li>Catégorie 2</li>
            <li>Catégorie 3</li>
            <li>Catégorie 4</li>
            <li>Catégorie 5</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
