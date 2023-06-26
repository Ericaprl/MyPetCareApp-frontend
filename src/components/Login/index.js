import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



import "./style.css";


function Login() {
  const navigate = useNavigate();
  const { authentication } = useContext(AuthContext);
  const [user, setUser] = useState({});



  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    authentication(user);
    setTimeout(() => {
      navigate("/home");
    }, 1000);


  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2> Sing in  </h2>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>


        <div className="row">
          <button>        
             <a href="/profile">Login</a>
          </button>
        </div>

        <h2> Create an account  </h2>

        <div className="row">
          <button>
            <a href="/register">Sign Up</a>
          </button>
        </div>

      </form>



    </div>
  );



}



export default Login;