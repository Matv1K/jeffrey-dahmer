import "components/Header/Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          <Link to="/shop" className="list__link">
            Shop
          </Link>
          <Link to="/men" className="list__link">
            Men
          </Link>
          <Link to="/women" className="list__link">
            Women
          </Link>
          <Link to="/kids" className="list__link">
            Kids
          </Link>
        </ul>
      </nav>

      <Link className="logo-link" to="/">
        <h2 className="logo">{process.env.REACT_APP_PROJECT_NAME}</h2>
      </Link>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <Link to="/about" className="list__link">
            About
          </Link>
          <Link to="/contact" className="list__link">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
