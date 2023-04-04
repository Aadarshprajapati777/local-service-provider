import React from "react";
import "./memberpage.css";

const MemberPage = (props) => {
  return (
    <div className="card_container">
      <h1 className="member_name">{props.name}</h1>
      <img src={props.profile_image} alt="members_image" className="member_photo" />
      <h2 className="members_id">{props.id}</h2>
    </div>
  );
};

export default MemberPage;
