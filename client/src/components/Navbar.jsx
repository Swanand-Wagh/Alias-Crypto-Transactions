import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo_container">Alias Transfer</div>
        <ul className="nav_links">
          <li className="login-btn">Login</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
