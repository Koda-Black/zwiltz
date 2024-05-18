import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="logo">
        <Link to="/" className="image">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <ul id="navbar">
          <li>
            <Link to="/work">Find Work</Link>
          </li>
          <li>
            <Link to="/talent">Find Talent</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="header-buttons">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/join" className="signup">
          Join Now
        </Link>
      </div>

      <div className="mobile mobile-toggler" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="icon bars" />
        ) : (
          <FaBars className="icon bars" />
        )}
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
