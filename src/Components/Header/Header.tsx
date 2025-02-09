import React from "react";
import logo from "./../../assets/Header/header-logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-content">
        <div className="Header-content-menu">
          
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;