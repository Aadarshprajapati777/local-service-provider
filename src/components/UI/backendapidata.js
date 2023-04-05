import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MemberPage from "./card/memberspage";
import "./backendapidata.css";
import { useNavigate } from "react-router-dom";
// import HomeScreen from "./Screen/HomeScreen/homescreen";

const ApiData = (props) => {
  const navigate = useNavigate();

  const handleProfileClick = (item) => {
    alert("You clicked on " + item.name);
    navigate("/memberprofile", { state: item });
  };

  const [data, setData] = useState([]);

  const fetchApiData = async () => {
    try {
      const response = await fetch(
        "https://thehuntsman4.pythonanywhere.com/api/"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <button
          className="button"
          onClick={() => {
            handleProfileClick(item);
          }}
        >
          <MemberPage
            key={item.id}
            name={item.name}
            profile_image={item.profile_image}
            id={item.id}
          />
        </button>
      ))}
    </div>
  );
};

export default ApiData;
