import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/components.css";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">RightsOfIndian.com</div>
        <button
          className="toggle-menu-button"
          onClick={() => setIsMenu(!isMenu)}
        >
          Menu
        </button>
        <ul className={"nav-links-container" + (isMenu ? " open" : "")}>
          <li>
            <Link to={"/"} onClick={() => setIsMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/simplified-constitution"}
              onClick={() => setIsMenu(false)}
            >
              Simplified Constitution
            </Link>
          </li>
          <li>
            <Link
              to={"/gamified-constitution"}
              onClick={() => setIsMenu(false)}
            >
              Gamified Constitution
            </Link>
          </li>
          <li>
            <Link to={"/profile"} onClick={() => setIsMenu(false)}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
