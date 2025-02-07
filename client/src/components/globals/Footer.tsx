import "../../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="logo-footer" src="/assets/images/logo.svg" alt="logo" />
      </Link>

      <nav className="footer-links">
        <li>
          <Link to="https://www.facebook.com/">
            <img
              className="footer-icons facebook"
              src="assets/images/facebook-icon.png"
              alt="logo facebook"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/">
            <img
              className="footer-icons instagram"
              src="assets/images/instagram-icon.png"
              alt="logo instagram"
            />
          </Link>
        </li>
        <li>
          <Link to="https://x.com/">
            <img
              className="footer-icons"
              src="assets/images/x-icon.png"
              alt="logo instagram"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/">
            <img
              className="footer-icons"
              src="assets/images/youtube-icon.png"
              alt="logo instagram"
            />
          </Link>
        </li>
      </nav>
    </footer>
  );
}

export default Footer;
