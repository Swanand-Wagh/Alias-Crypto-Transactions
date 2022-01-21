import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="nav_links">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((link, index) => (
            <li className="nav_item" key={index}>
              {link}
            </li>
          ))}
          <li className="login-btn">Login</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
