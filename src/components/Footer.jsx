import React from "react";

import "../stylesheets/components.css";

const Footer = () => {
  return (
    <footer>
      <div className="links-container">
        <div>
          <h4>Follow Us</h4>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/rightsofindian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What's App Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/team">Team Page</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright-container">
        <p>
          &copy; {new Date().getFullYear()} RightsOfIndian.com All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
