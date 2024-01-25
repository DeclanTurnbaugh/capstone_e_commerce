import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              E-Commerce is your go-to destination for quality products. We
              strive to provide the best shopping experience for our customers.
            </p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: info@e_commerce.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 E_Commerce. All rights not really reserved. This site
          isn't real.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
