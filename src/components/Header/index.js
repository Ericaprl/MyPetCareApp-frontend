import React, {useContext} from "react";
import { AuthContext } from "../context/AuthContext"


import "./style.css";

function Header() {
    const {auth}= useContext(AuthContext);


   return  <header>
        {/* <a href="/"> About Us </a> */}
        {/* <a href="/"> Services </a> */}

        <a href="/profile">profile</a>

        <a href="/login">Login</a>
        <a href="/home">Home</a>
        <a href="/register"> Sign Up </a>

        {auth.user && <strong> Welcome !! {auth?.user.name}</strong>}
    </header>
}

export default Header;