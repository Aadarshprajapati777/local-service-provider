import React from "react";
import "./registrationpage.css";
import photoIcon from "../../assets/images/photo-icon.png";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="left-container">
          <h1>Registration Page</h1>
          <form className="registration-form">
            <label>
              Full Name:
              <input type="text" name="firstName" />
            </label>
            <div className="gender-container">
              <label>
                Gender:
              </label>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Other" name="gender" /> Other
            </div>
            <label>
              Date of Birth:
              <input type="date" name="dob" />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" />
            </label>
            <label>
              Address:
              <input type="text" name="address" />
            </label>
            <div className="home-service-container">
              <label>
                Home Service:
              </label>
              <input type="radio" name="homeService" /> Yes
              <input type="radio" name="homeService" /> No
            </div>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <label>
              Confirm Password:
              <input type="password" name="confirmPassword" />
            </label>
            <input type="submit" value="Submit" />
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
