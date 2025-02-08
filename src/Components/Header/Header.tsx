import React from 'react'
import logo from '../../assets/Header/header-logo.png'
import './Header.css'
function Header() {
  return (
    <div className="Header">
      <div className="Header-past">
        <div className="Header-left__past">
          
          <div className="Header-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="Header-right__past">

        </div>
      </div>


    </div>
  );
}

export default Header;
