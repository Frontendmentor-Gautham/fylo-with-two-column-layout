import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
