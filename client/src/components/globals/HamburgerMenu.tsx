import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <Hamburger size={40} toggled={open} toggle={setOpen} />
      {open && (
        <div>
          <header>
            <Hamburger size={40} toggled={open} toggle={setOpen} />
          </header>
          <ul>
            <li>
              <NavLink to="/legal-notices">Mentions l'égales</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
