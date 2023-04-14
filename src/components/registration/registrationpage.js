import React from "react";
import "./registrationpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../UI/backend/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseStore = getFirestore(app);
const auth = getAuth(app);

const RegistrationPage = () => {
  const navigate = useNavigate();

  const createuser = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(alert("User Created Successfully"))
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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

  const writeUserData = async (data) => {
    try {
      await addDoc(collection(firebaseStore, "users"), {
        fullName: data.fullName,
        gender: data.gender,
        dob: data.dob,
        phoneNumber: data.phoneNumber,
        address: data.address,
        homeService: data.homeService,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        profession: data.profession,
      });
      console.log("Document written with ID: ", writeUserData.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


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

  const postregistrationData = async (e) => {
    e.preventDefault();

    if (
      !data.fullName ||
      !data.gender ||
      !data.phoneNumber ||
      !data.address ||
      !data.password ||
      !data.confirmPassword ||
      !data.profession
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const {
      fullName,
      gender,
      dob,
      phoneNumber,
      address,
      homeService,
      email,
      password,
      confirmPassword,
      profession,
    } = data;

    const res = await fetch(
      "https://local-service-provider-eccba-default-rtdb.firebaseio.com/registration.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          gender,
          dob,
          phoneNumber,
          address,
          homeService,
          email,
          password,
          confirmPassword,
          profession,
        }),
      }
    );

    if (res) {
      setData({
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
      alert("sign up Successful");
      writeUserData(data);
      createuser();
      navigate("/login");
    } else {
      alert("oops! something went wrong, please try again");
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="left-container">
          <h1>Registration Page</h1>
          <form className="registration-form" method="POST">
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                onChange={handleRegistrationFormInput}
                value={data.fullName}
                required
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
                required
              />{" "}
              Male
              <input
                type="radio"
                value="female"
                name="gender"
                checked={data.gender === "female"}
                onChange={handleRegistrationFormInput}
                required
              />{" "}
              Female
              <input
                type="radio"
                value="other"
                name="gender"
                checked={data.gender === "other"}
                onChange={handleRegistrationFormInput}
                required
              />{" "}
              Other
            </div>
            <div>
              <label>
                Upload Profile Image:
                <input type="file" name="image" accept="image/*" />
              </label>
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
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                onChange={handleRegistrationFormInput}
                value={data.address}
                required
              />
            </label>

            <div className="profession">
              <label>Profession:</label>
              <select
                name="profession"
                onChange={handleRegistrationFormInput}
                value={data.profession}
                required
              >
                <option value="doctor">Doctor</option>
                <option value="plumber">Plumber</option>
                <option value="teacher">Teacher</option>
                <option value="electrician">Electrician</option>
              </select>
            </div>

            <div
              className="home-service-container"
              onChange={handleRegistrationFormInput}
            >
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
                required
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                onChange={handleRegistrationFormInput}
                value={data.confirmPassword}
                required
              />
            </label>
            <button
              type="submit"
              className="register-button"
              onClick={postregistrationData}
            >
              sign up
            </button>

            <button onClick={handleLoginButtonClick} className="login-button">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default RegistrationPage;
