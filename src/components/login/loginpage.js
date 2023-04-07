import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../UI/backend/firebase";
import "./loginpage.css";

const auth = getAuth(app);

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const checkCurrentUser = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(user);
      }
    });
    return checkCurrentUser;
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      navigate("/homescreen", { state: loggedInUser.email });
    }
  }, [loggedInUser, navigate]);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleLoginFormInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUpButton = () => {
    navigate("/registration");
  };

  const handleResetPasswordButton = () => {
    navigate("/resetpassword");
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
            value={loginData.email}
            onChange={handleLoginFormInput}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginFormInput}
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
        <button className="reset" onClick={handleResetPasswordButton}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
