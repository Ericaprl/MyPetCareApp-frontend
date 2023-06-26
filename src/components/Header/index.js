import React from "react";
//import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext"
// const { auth } = useContext(AuthContext);
// {auth.user && <strong> Welcome !! {auth?.user.name}</strong>}

import  {ReactComponent as Brand } from "./pawprint.svg";
import "./style.css";
import { useState } from 'react'
import { ReactComponent as Hamburger } from "./hamburger.svg";


function Header() {
  // const { auth } = useContext(AuthContext);

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (
    <header>
      <nav className="navbar">
        <div className="container">  
        <div className="logo">
            <Brand />
            
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
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Pet Grooming</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;