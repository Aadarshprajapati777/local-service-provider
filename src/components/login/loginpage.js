import React from "react";
import { useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpButton = () => {
    alert("Sign Up Button Clicked");
    navigate("/registration");
  };


  const handleResetPasswordButton = () => {
    alert("Reset Password Button Clicked");
    navigate("/resetpassword");
    };


  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
    navigate("/backendapidata");
  };

  let name, value;
  const handleLoginFormInput = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>

      <form onSubmit={handleLoginFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleLoginFormInput}
            value={loginData.email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleLoginFormInput}
            value={loginData.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <div>
        <h2>Don't have an account?</h2>
        <button className="signup" onClick={handleSignUpButton}>
          Sign Up
        </button>
      </div>

      <div>
        <h2>Forgot your password?</h2>
        <button className="reset" onClick={handleResetPasswordButton}>Reset Password</button>
      </div>
    </div>
  );
};

export default LoginPage;
