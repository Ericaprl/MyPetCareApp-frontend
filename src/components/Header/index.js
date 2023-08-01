import React from "react";
import  {ReactComponent as Brand } from "../images/pawprint.svg"
import { useState } from 'react'
import { ReactComponent as Hamburger } from "../images/hamburger.svg";
import "./style.css";



function Header() {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (
    <header>
      <nav className="navbar">
        <div className="header-container">  
        <div className="logo">
            <a href="/home">
            <Brand /></a>
            
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
        
         
        
          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
                
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/mapSearch">Pet Shops</a>
              </li>
            
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;