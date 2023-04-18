import React from "react";
import "./homescreen.css";
import ApiData from "../../backendapidata";
import ProfilePic from "./profilepic";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const auth = getAuth(app);

const HomeScreen = (props) => {
  const location = useLocation();
  const loggedInUser = location.state;
  const navigate = useNavigate();
  const [homeScreenData, setHomeScreenData] = useState({
    search: "",
    filter: "",
  });

  const handleProfessionFilter = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setHomeScreenData({ ...homeScreenData, [name]: value });
    alert(`Filter has been changed to ${value}`);
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    // const searchValue = homeScreenData.search.toLowerCase();
    // const filterValue = homeScreenData.filter;
    // const filteredData = [];
    
    // ApiData.filter((data) => {
    //   if (data.profession === filterValue && data.fullname.toLowerCase().includes(searchValue)) {
    //     filteredData.push(data);
    //   }
    // });

    // // Send filteredData to Firebase and retrieve filtered results
    // const dbRef = firebase.database().ref('filteredData');
    // dbRef.set(filteredData).then(() => {
    //   dbRef.on('value', (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);
    //   });
    // });

    alert("You are looking for " + homeScreenData.search);
  };


  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  let name, value;
  const handleHomeScreenSearch = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setHomeScreenData({ ...homeScreenData, [name]: value });

  };

  return (
    <div className="home_screen">
      <h1>Home Screen</h1>  
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={handleHomeScreenSearch}
          value={homeScreenData.search}
        />
        <button className="search-button" onClick={handleSearchButtonClick}>
          Search
        </button>

        <button className="sign-out-button" onClick={handleLogOut}>
          Log Out
        </button>

        <div className="profession_filter">
          <label>Filter</label>
          <select
            name="filter"
            onChange={handleProfessionFilter}
            value={homeScreenData.filter}
          >
           <option value="">Search by Profession</option>
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
          <div className="profile-pic">
            <ProfilePic loggedInUser={loggedInUser} />
          </div>
        </div>
      </div>
      <div className="api-data">
        <ApiData />
      </div>
    </div>
  );
};
export default HomeScreen;
