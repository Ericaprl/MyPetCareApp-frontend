import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import loginIMG from "../images/loginIMG.png";
import "./style.css";


function Login() {
  const navigate = useNavigate();
  const { authentication, auth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");



  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user.username || !user.password) {
      setError("Please, fill in all fields!");
      return;
    }
    try {
      await authentication(user);
      navigate("/profile");
    } catch (error) {
      setError("Username or password incorrect!");
    }
  }
  return (
    <div className="login">
      <div className="lcontainer">
        {auth.user && <strong> Welcome !! {auth?.user.name}</strong>}

        <div className="image">
          <img src={loginIMG} alt="Imagem" />
        </div>
        <div className="form">

          <form onSubmit={handleSubmit}>

            <h2> Login </h2>

            <div className="row">
              <span>Username</span><br />
              <input type="text" name="username" className="login-input" onChange={handleChange} required />
            </div>

            <div className="row">
              <span>Password</span><br />
              <input type="password" name="password" className="login-input" onChange={handleChange} required />
            </div>


            <div className="row">
              <button type="submit">Login</button>
            </div>

            <div className="row">
              <button>
                <a href="/forgotPassword">Forgot Password</a>
              </button>
            </div>
            {error && <p className="error">{error}</p>}

            <p> or </p>
            <h2> Create an account  </h2>

            <div className="row">
              <button>
                <a href="/register"> Sign Up</a>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>

  );



}



export default Login;