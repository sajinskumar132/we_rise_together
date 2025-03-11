import React, { useState } from "react";
import website_logo from "../../assets/website_logo.png";
import "./customNavBarStyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
function CustomNavBar() {
  const [drawerVisibility, setDrawerVisibility] = useState(null);
  return (
    <nav className="custom_navbar_sticky_container">
      <div className="custom_navbar_super_main_container">
        <div className="custom_navbar_main_container">
          <div>
            <GiHamburgerMenu className="custom_navbar_hamburger_icon"  onClick={()=>{
              setDrawerVisibility(!drawerVisibility)
            }}/>
          </div>
          <div className="custom_navbar_website_logo">
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
            <p className="custom_navbar_navigation_item">Upcoming Events</p>
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
        {/* Mobile Responsive */}
        <div className="custom_navbar_drawer_main_container" style={{display:drawerVisibility?'block':"none"}} onClick={()=>{
          setDrawerVisibility(!drawerVisibility)
        }}>
          <div className="custom_navbar_drawer_sub_container">
            <div className="custom_navbar_drawer_sub_container_row_flex">
              <img
                src={website_logo}
                alt="Together We Rise"
                className="custom_navbar_website_icon"
              />
              <RiCloseLargeFill className="custom_navbar_drawer_close" onClick={()=>{
                setDrawerVisibility(!drawerVisibility)
              }}/>
            </div>
            <div className="custom_navbar_drawer_sub_container_column_flex">
              <p className="custom_navbar_navigation_item" onClick={()=>{
                console.log('clicked')
              }}>Home</p>
              <p className="custom_navbar_navigation_item">About</p>
              <p className="custom_navbar_navigation_item">Features</p>
              <p className="custom_navbar_navigation_item">Stories</p>
              <p className="custom_navbar_navigation_item">Upcoming Events</p>
            </div>
            <div className="custom_navbar_drawer_action_container">
              <div className="custom_navbar_drawer_sub_container_row_flex">
              <button className="custom_navbar_action_button login">
                Login
              </button>
              <button className="custom_navbar_action_button sign_up">
                Sign Up
              </button>
              </div>
              
              <button className="custom_navbar_action_button download res">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavBar;
