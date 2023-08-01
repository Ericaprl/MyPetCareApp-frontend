import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


import "./style.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      const response = await api.post("/resetPassword", { token, password });
      setMessage(response.data.message);
      setMessage("Password reset successful.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div className="p-container">
    <div className="r-pass">
      <h2>Reset Password</h2>
      <input type="password" placeholder="Enter your new password" onChange={handleChangePassword} />
      <input type="password" placeholder="Confirm your new password" onChange={handleChangeConfirmPassword} />
      <button onClick={handleSubmit}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default ResetPassword;
