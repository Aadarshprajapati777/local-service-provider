import React from "react";
import "./userprofile.css";


const UserProfile = (props) => {
    return (
        <div className="user_profile_container">
            <h1 className="user_profile_title">User Profile Page</h1>
            <div className="user_profile_container">
                <h1 className="user_name">User Name</h1>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user_image" className="user_photo" />
                <h2 className="user_id">User ID</h2>
            </div>
        </div>
    )
}
export default UserProfile;