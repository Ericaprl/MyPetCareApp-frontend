import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import registerIMG from "../images/registerIMG.png";

import api  from "../../services/api"

import "./style.css";


function Register() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function handleChange(e) {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      }

    function handleSubmit(e) {
        e.preventDefault();
        api.post("/users", user).then((response) => {
          navigate("/welcome", { state: { fname: user.fname } });
    });
}



    return (
      <div className="register">
        <div className="rcontainer">

        <div className="image">
        <img src={registerIMG} alt="Imagem" />
      </div>
<div className="form">
            <form   onSubmit={handleSubmit}>
            <h2> Sign Up </h2>


            <div className="row">
          <span>First Nome</span>
          <input type="text" name="fname" className="reg-input" onChange={handleChange} required/>
        </div>

        <div className="row">
          <span>Last Nome</span>
          <input type="text" name="lname" className="reg-input" onChange={handleChange} required/>
        </div>

        <div className="row">
          <span>E-mail</span>
          <input type="text" name="email" className="reg-input"onChange={handleChange} required />
        </div>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" className="reg-input"onChange={handleChange} required/>
        </div>

        <div className="row">
          <span>Password</span>
          <input type="password" name="password" className="reg-input" onChange={handleChange}  required/>
          {user.password && user.password.length < 8 && (
                <p className="password-reminder">
                  Password must be at least 8 characters long.
                </p>
              )}
        </div>
      

        <div className="row">
          <button> Create your account </button>
        </div>

            </form>
            </div>

        </div>
        </div>
    );
}

export default Register;