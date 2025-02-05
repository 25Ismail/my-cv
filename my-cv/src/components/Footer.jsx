import React from "react";

// Footer component displayed at the bottom of the page.
// Contains copyright notice and social media links.
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Copyright notice with dynamic year */}
      <p>
        &copy; {new Date().getFullYear()} Ismail. Alla rättigheter förbehållna.
      </p>
      <ul>
        <li>
          {/* Link to LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/ismail-takow-622999186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          {/* Link to GitHub profile */}
          <a
            href="https://github.com/25Ismail"
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
