import React from "react";
import { Link } from "react-router-dom";

// Navbar component for site navigation.
// Provides links to different sections of the website.
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          {/* Link to the "About Me" page */}
          <Link to="/">Om mig</Link>
        </li>
        <li>
          {/* Link to the "Projects" page */}
          <Link to="/projects">Projekt</Link>
        </li>
        <li>
          {/* Link to the "Contact" page */}
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
