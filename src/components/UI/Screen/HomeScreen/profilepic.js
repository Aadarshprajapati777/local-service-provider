import React from "react"; 
import "./profilepic.css";
import { useNavigate } from "react-router-dom"; 
import Menu from "../../menu/menu";
import { useState } from "react";

const ProfilePic = (props) => {
  const[isHover, setIsHover] = useState(false);


  const navigate = useNavigate();
  const handleProfileClick = () => {
    alert("You clicked on profile pic");
    navigate("/userprofile");
  };

  const handleProfileMouseOver = () => {
    console.log("You are hovering over profile pic");  
    setIsHover(true);
    
  };
  

  return (
    <div className="profile_pic_container" onClick={handleProfileClick} onMouseOver={handleProfileMouseOver} onMouseOut={() => setIsHover(false)}>
      
            {isHover && <Menu/>}
      <img src={props.profile_image} alt="members_image" />
    </div>
  );
};
export default ProfilePic;
