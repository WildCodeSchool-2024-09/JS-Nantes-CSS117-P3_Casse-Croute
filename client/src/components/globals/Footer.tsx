import "../../styles/Footer.css";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="logo-footer" src="/assets/images/logo.svg" alt="logo" />
      </Link>

      <nav className="footer-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
      </nav>
    </footer>
  );
}

export default Footer;
