import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MemberPage from "./card/memberspage";


const ApiData = (props) => {

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
    
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <MemberPage key={item.id} name={item.name} profile_image={item.profile_image} id={item.id} />
      ))}
    </div>
  );
};

export default ApiData;