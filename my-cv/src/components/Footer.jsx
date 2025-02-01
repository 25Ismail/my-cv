import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        &copy; {new Date().getFullYear()} Ismail. Alla rättigheter förbehållna.
      </p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ismail"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ismail"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
