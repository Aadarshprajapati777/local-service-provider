import React from "react";
import "./userprofile.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Userprofile = (props) => {
  const [userProfileData, setUserProfileData] = useState({
    message: "",
  });

  let message = "";
  const handleUserProfileMessage = (e) => {
    console.log(e.target.value);
    message = e.target.value;
    setUserProfileData({ ...userProfileData, message: message });
  };

  const handleMessageButtonClick = () => {
    alert("You are sending a message " + userProfileData.message);
  };

  const handleBookNowButtonClick = () => {
    alert("You are booking a service ");
  };

  const handleContactButtonClick = () => {
    alert("You are contacting the service provider ");
  };

  const handleMoreAboutMyselfButtonClick = () => {
    alert("You are viewing more about the service provider ");
  };

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
      <div>
        <button className="book_now" onClick={handleBookNowButtonClick}>
          {" "}
          Book Now
        </button>
        <button className="contact" onClick={handleContactButtonClick}>
          Contact
        </button>
        <button
          className="more_about_my_self"
          onClick={handleMoreAboutMyselfButtonClick}
        >
          More About Myself
        </button>
        <input
          type="text"
          placeholder="message"
          message="message"
          onChange={handleUserProfileMessage}
          value={userProfileData.message}
        />
        <button className="message" onClick={handleMessageButtonClick}>
          {" "}
          Send Message
        </button>
      </div>
    </div>
  );
};
export default Userprofile;
