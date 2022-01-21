import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer gradient-bg-footer">
        <div className="footer_left">
          <div className="footer_logo_container">
            <img src={logo} alt="logo" className="footer_logo" />
          </div>
          <div className="footer_links">
            <p className="footer_item">Market</p>
            <p className="footer_item">Exchange</p>
            <p className="footer_item">Tutorials</p>
            <p className="footer_item">Wallets</p>
          </div>
        </div>

        <div className="footer_right">
          <p className="footer_desc">
            Come join me and hear for the unexpected miracle
          </p>
          <p className="footer_website">swanandwagh.tech</p>
        </div>

        <div className="divider" />

        <div className="bottom-container">
          <p>@Alias2022</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
