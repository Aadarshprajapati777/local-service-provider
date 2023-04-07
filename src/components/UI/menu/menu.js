import React from "react";
import "./menu.css";


const Menu = (props) => {
    return (
        <div className="menu_container">
            <button className="chats" onClick={props.handleChatsClick}>Chats</button>
            <button className="settings" onClick={props.handleSettingsClick}>Settings</button>
            <button className="notifications" onClick={props.handleNotificationsClick}>Notifications</button>
            <button className="help" onClick={props.handleHelpClick}>Help</button>
            <button className="mybookings" onClick={props.handleMyBookingsClick}>My Bookings</button>
            <button className="logout" onClick={props.handleLogoutClick}>Logout</button>
        </div>      
    );
    }
export default Menu;