import React from "react";
import "./homescreen.css";
import ApiData from "../../backendapidata";
import ProfilePic from "./profilepic";
import { useState } from "react";

const HomeScreen = () => {
  const [homeScreenData, setHomeScreenData] = useState({
    search: "",
    filter: "doctor",
  });

  const handleProfessionFilter = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setHomeScreenData({ ...homeScreenData, [name]: value });
  };

  const handleSearchButtonClick = () => {
    alert("You are looking for " + homeScreenData.search);
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
      <div className="search-bar">
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

      <div className="profession_filter">
        <label>Filter</label>
        <select
          name="filter"
          onChange={handleProfessionFilter}
          value={homeScreenData.filter}
        >
          <option value="doctor">Doctor</option>
          <option value="engineer">Plumber</option>
          <option value="teacher">Teacher</option>
          <option value="other">Electrician</option>
        </select>
        <div className="profile-pic">
          <ProfilePic />
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
