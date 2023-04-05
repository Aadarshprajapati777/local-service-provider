import React from "react";
import "./userprofile.css";
import { useLocation } from "react-router-dom";

const Userprofile = (props) => {
  const location = useLocation();
  const { name, profile_image, id } = location.state;

  return (
    <div>
      <h1 className="member_profile_title">Service Provider Page</h1>
      <div className="member_profile_container">
        <h1 className="member_name">{name}</h1>
        <img src={profile_image} alt="members_image" className="member_photo" />
        <h2 className="members_id">{id}</h2>
      </div>
    </div>
  );
};
export default Userprofile;
