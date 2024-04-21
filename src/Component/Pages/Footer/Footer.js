import React from "react";
import "./Footer.css";
import whiteLogo from "../../Images/INVENTORY-white.png";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="first-section">
        <div className="white-logo">
          <img src={whiteLogo} alt="" />
        </div>
        <div className="details-list">
          <div className="f">
            <a href="#">About</a>
            <a href="#">Read our blog</a>
            <a href="#">Sign up to option</a>
            <a href="#">Delivery & Restock</a>
          </div>
          <div className="f">
            <a href="#">Manage</a>
            <a href="#">Add items</a>
            <a href="#">My items</a>
            <a href="#">Stock update</a>
          </div>
        </div>
      </div><br /><br />
      <div className="second-section">
        <div className="copyright-msg">
          <p>Copyright © 2024 GYMachine inventory management</p>
        </div>
        <div className="others">
          <p>Privcy Policy</p>
          <p>Terms of Use</p>
          <p>Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
