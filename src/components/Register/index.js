import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api"

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
          navigate("/home");
    });
}



    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h2> Sign Up </h2>


            <div className="row">
          <span>First Nome</span>
          <input type="text" name="fname" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Last Nome</span>
          <input type="text" name="lname"  onChange={handleChange}/>
        </div>

        <div className="row">
          <span>E-mail</span>
          <input type="text" name="email" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange}/>
        </div>

        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>
      

        <div className="row">
          <button> Create your account </button>
        </div>

            </form>


        </div>
    );
}

export default Register;