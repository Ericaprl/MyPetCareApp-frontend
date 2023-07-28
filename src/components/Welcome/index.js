import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

function Welcome() {
  const location = useLocation();
  const fname = location.state?.fname || "Pet owner";

  return (
    <div className="welcome">
      <div className=" wel-container">
      <div className="wel-content">
      <h1>Welcome,</h1>
        <h2> {fname}!</h2>
      <p>Thank you for registering. Your account has been created successfully.</p>
      <a href="/profile">
        <button type='submit'>Continue</button>
      </a>
    </div>
    </div>
    </div>
  );
}

export default Welcome;
