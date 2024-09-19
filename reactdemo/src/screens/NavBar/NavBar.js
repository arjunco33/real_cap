import React from "react";
import "./NavBar.css"; // Create a CSS file to style the navbar
import logo from "../../Assets/logo1.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">iLogicPlus Solutions</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">
          <button className="navbar-button">Home</button>
        </Link>
        <Link to="/about-us">
          <button className="navbar-button">About Us</button>{" "}
        </Link>
        <Link to="/contact">
          <button className="navbar-button">Contact</button>
        </Link>
        <Link to="/page1">
          <button className="navbar-button">Lending</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
