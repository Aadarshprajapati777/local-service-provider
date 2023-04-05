import React from "react";
import "./profilepic.css";

const ProfilePic = (props) => {
  const handleProfileClick = () => {
    alert("You clicked on profile pic");
  };

  return (
    <div className="profile_pic_container" onClick={handleProfileClick}>
      <img src={props.profile_image} alt="members_image" />
    </div>
  );
};
export default ProfilePic;