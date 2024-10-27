import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./images/logo.svg";
import Searchbar from "./Searchbar";
import Profile from "./Profile";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <nav>
        <img src={Logo} width={40} alt="Logo" />

        {/* Collapsible Menu Links */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#">Portraits</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>

      <div className="search-profile-box">
        <Searchbar />
        <Profile />
        {/* Hamburger Menu Button for Small Screens */}
        <a className="menu-button" onClick={toggleMenu}>
          &#9776;
        </a>
      </div>
    </div>
  );
}

export default Navbar;
