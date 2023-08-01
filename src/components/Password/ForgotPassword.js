import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import "./style.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/forgotPassword", { email });
      setMessage(response.data.message);
      if (response.data.success) {
        navigate(`/resetPassword/${response.data.token}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div className="p-container">
      <div className="f-pass">
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" onChange={handleChange} />
        <button onClick={handleSubmit}>Reset Password</button>
        {message && <p>{message}</p>}
      </div>

     
    </div>
  );
};

export default ForgotPassword;