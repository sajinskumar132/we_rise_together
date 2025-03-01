import React from "react";
import website_logo from "../../assets/website_logo.png";
import "./customNavBarStyle.css";
function CustomNavBar() {
  return (
    <nav >
      <div className="custom_navbar_main_container">
        <div>
          <img
            src={website_logo}
            alt="Together We Rise"
            className="custom_navbar_website_icon"
          />
        </div>
        <div className="custom_navbar_navigation_link">
          <p className="custom_navbar_navigation_item">Home</p>
          <p className="custom_navbar_navigation_item">About</p>
          <p className="custom_navbar_navigation_item">Features</p>
          <p className="custom_navbar_navigation_item">Stories</p>
          <p className="custom_navbar_navigation_item">Events</p>
          <p className="custom_navbar_navigation_item">Support</p>
        </div>
        <div className="custom_navbar_action_buttons">
          <button className="custom_navbar_action_button login">Login</button>
          <button className="custom_navbar_action_button sign_up">
            Sign Up
          </button>
          <button className="custom_navbar_action_button download">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavBar;
