import React from "react";
import "./registrationpage.css";
import photoIcon from "../../assets/images/photo-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {

const navigate = useNavigate();

  const handleRegistrationFormSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful");
    navigate("/homescreen");
  };


  const [data, setData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    address: "",
    homeService: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
  });

  let name, value;

  const handleRegistrationFormInput = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleLoginButtonClick = () => {
    alert("Login Button Clicked");
    navigate("/login");
  };



  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="left-container">
          <h1>Registration Page</h1>
          <form className="registration-form" onSubmit={handleRegistrationFormSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                onChange={handleRegistrationFormInput}
                value={data.fullName}
              />
            </label>
            <div className="gender-container">
              <label>Gender:</label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={data.gender === "male"}
                onChange={handleRegistrationFormInput}
              />{" "}
              Male
              <input
                type="radio"
                value="female"
                name="gender"
                checked={data.gender === "female"}
                onChange={handleRegistrationFormInput}
              />{" "}
              Female
              <input
                type="radio"
                value="other"
                name="gender"
                checked={data.gender === "other"}
                onChange={handleRegistrationFormInput}
              />{" "}
              Other
            </div>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                onChange={handleRegistrationFormInput}
                value={data.dob}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                onChange={handleRegistrationFormInput}
                value={data.phoneNumber}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                onChange={handleRegistrationFormInput}
                value={data.address}
              />
            </label>

            <div className="profession">
              <label>Profession:</label>
              <select
                name="profession"
                onChange={handleRegistrationFormInput}
                value={data.profession}
              >
                <option value="doctor">Doctor</option>
                <option value="plumber">Plumber</option>
                <option value="teacher">Teacher</option>
                <option value="electrician">Electrician</option>
              </select>
            </div>

            <div className="home-service-container" onChange={handleRegistrationFormInput}>
              <label>Home Service:</label>
              <input
                type="radio"
                name="homeService"
                value="yes"
                checked={data.homeService === "yes"}
                onChange={handleRegistrationFormInput}
              />{" "}
              Yes
              <input
                type="radio"
                name="homeService"
                value="no"
                checked={data.homeService === "no"}
                onChange={handleRegistrationFormInput}
              />{" "}
              No
            </div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={handleRegistrationFormInput}
                value={data.email}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={handleRegistrationFormInput}
                value={data.password}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                onChange={handleRegistrationFormInput}
                value={data.confirmPassword}
              />
            </label>
            <input type="submit" value="Sign Up" />
            <button onClick={handleLoginButtonClick} className="login-button">Login</button>

          </form>
        </div>
        <div className="photo-icon-container">
          <image src={photoIcon} alt="Upload photo" />
          <p>Upload Photo</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
