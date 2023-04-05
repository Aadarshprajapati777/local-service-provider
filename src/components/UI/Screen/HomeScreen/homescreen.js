import React from "react";
import "./homescreen.css";
import ApiData from "../../backendapidata";

const HomeScreen = () => {
  return (
    <div className="home_screen">
      <h1>Home Screen</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
        <div className="api-data">
            <ApiData />
        </div>
    </div>
  );
};
export default HomeScreen;
