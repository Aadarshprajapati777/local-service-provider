import React from "react";
import "./registrationpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../UI/backend/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
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
    profilePhoto: "",
    pic: "",
  });

  const writeUserData = async (data) => {
    try {
      const imageRef = ref(
        storage,
        `uploads/images/${Date.now()}-${data.pic.name}`
      );
      await uploadBytes(imageRef, data.pic);

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
        imageUrl: imageRef.fullPath,
      });

      console.log("User data written successfully");
    } catch (error) {
      console.error(error);
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
      !data.profession ||
      !data.pic
      
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
            <div className="upload-container">
              <label className="upload-label">
                Upload Profile Image:
                <input
                  type="file"
                  name="profileImage"
                  onChange={(e) => {
                    setData({ ...data, pic: e.target.files[0] });
                  }}
                />
              </label>
            </div>
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
                <option value="">Select Profession</option>
                <option value="accountant">Accountant</option>
                <option value="architect">Architect</option>
                <option value="babysitter">Babysitter</option>
                <option value="barber">Barber</option>
                <option value="beautician">Beautician</option>
                <option value="caterer">Caterer</option>
                <option value="car wash">Car Wash</option>
                <option value="carpenter">Carpenter</option>
                <option value="cleaner">Cleaner</option>
                <option value="coach">Coach</option>
                <option value="consultant">Consultant</option>
                <option value="contractor">Contractor</option>
                <option value="cook">Cook</option>
                <option value="counselor">Counselor</option>
                <option value="delivery driver">Delivery Driver</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
                <option value="doctor">Doctor</option>
                <option value="driver">Driver</option>
                <option value="electrician">Electrician</option>
                <option value="engineer">Engineer</option>
                <option value="financial advisor">Financial Advisor</option>
                <option value="fitness trainer">Fitness Trainer</option>
                <option value="gardener">Gardener</option>
                <option value="hairdresser">Hairdresser</option>
                <option value="handyman">Handyman</option>
                <option value="housekeeper">Housekeeper</option>
                <option value="interpreter">Interpreter</option>
                <option value="labour">Labour</option>
                <option value="landscaper">Landscaper</option>
                <option value="lawyer">Lawyer</option>
                <option value="makeup artist">Makeup Artist</option>
                <option value="massage therapist">Massage Therapist</option>
                <option value="mechanic">Mechanic</option>
                <option value="milk man">Milk man</option>
                <option value="musician">Musician</option>
                <option value="nanny">Nanny</option>
                <option value="nutritionist">Nutritionist</option>
                <option value="painter">Painter</option>
                <option value="personal assistant">Personal Assistant</option>
                <option value="pet groomer">Pet Groomer</option>
                <option value="photographer">Photographer</option>
                <option value="photographer">Photographer</option>
                <option value="plasterer">Plasterer</option>
                <option value="plumber">Plumber</option>
                <option value="programmer">Programmer</option>
                <option value="real estate agent">Real Estate Agent</option>
                <option value="repairman">Repairman</option>
                <option value="resturant owner">Resturant Owner</option>
                <option value="salesperson">Salesperson</option>
                <option value="security guard">Security Guard</option>
                <option value="software engineer">Software Engineer</option>
                <option value="student">Student</option>
                <option value="tailor">Tailor</option>
                <option value="teacher">Teacher</option>
                <option value="translator">Translator</option>
                <option value="tutor">Tutor</option>
                <option value="waiter">Waiter</option>
                <option value="web developer">Web Developer</option>
                <option value="writer">Writer</option>
                <option value="other">Other</option>
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
        <div className="photo-icon-container">
          {/* <image src={photoIcon} alt="Upload photo" /> */}
          {/* <p>Upload Photo</p> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
