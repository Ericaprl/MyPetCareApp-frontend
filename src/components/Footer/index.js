import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-address">
        <h3> LOCATION </h3>
        <p> Dublin - Ireland </p>
      </div>

      <div className="footer-contact">
        <h3> CONTACT </h3>
        <p> ericadea.pe@hotmail.com </p>
      </div>

      <div className="footer-social">
        <h3> SOCIAL </h3>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/erica-pereira-663a8950/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ericaprl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-credits">
        <p>
          &copy; 2023 Erica Pereira
          <br />
          Personal Project: My Pet Care App
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
