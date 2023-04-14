import React from "react";
import "./homescreen.css";
import ApiData from "../../backendapidata";
import ProfilePic from "./profilepic";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const auth = getAuth(app);

const HomeScreen = (props) => {
  const location = useLocation();
  const loggedInUser = location.state;
  const navigate = useNavigate();
  const [homeScreenData, setHomeScreenData] = useState({
    search: "",
    filter: "doctor",
  });
  const handleProfessionFilter = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setHomeScreenData({ ...homeScreenData, [name]: value });
    alert(`Filter has been changed to ${value}`);
  };

  const handleSearchButtonClick = () => {
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
      <div>
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
            <option value="doctor">Doctor</option>
            <option value="plumber">Plumber</option>
            <option value="teacher">Teacher</option>
            <option value="electrician">Electrician</option>
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
