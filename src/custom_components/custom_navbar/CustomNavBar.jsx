import React, { useState } from "react";
import website_logo from "../../assets/website_logo.png";
import "./customNavBarStyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import CommonHelper from "../../helpers/commonHelper";
function CustomNavBar() {
  const [drawerVisibility, setDrawerVisibility] = useState(null);
  return (
    <nav className="custom_navbar_sticky_container">
      <div className="custom_navbar_super_main_container">
        <div className="custom_navbar_main_container">
          <div>
            <GiHamburgerMenu
              className="custom_navbar_hamburger_icon"
              onClick={() => {
                setDrawerVisibility(!drawerVisibility);
              }}
            />
          </div>
          <div className="custom_navbar_website_logo">
            <img
              src={website_logo}
              alt="Together We Rise"
              className="custom_navbar_website_icon"
            />
          </div>
          <div className="custom_navbar_navigation_link">
            <a className="custom_navbar_navigation_item" href="#home">
              Home
            </a>
            <a className="custom_navbar_navigation_item" href="#about">
              About
            </a>
            <a className="custom_navbar_navigation_item" href="#features">
              Features
            </a>
            <a className="custom_navbar_navigation_item" href="#stories">
              Stories
            </a>
            <a className="custom_navbar_navigation_item" href="#events">
              Upcoming Events
            </a>
          </div>
          <div className="custom_navbar_action_buttons">
            <button
              className="custom_navbar_action_button login"
              onClick={() => {
                CommonHelper.Alert();
              }}
            >
              Login
            </button>
            <button
              className="custom_navbar_action_button sign_up"
              onClick={() => {
                CommonHelper.Alert();
              }}
            >
              Sign Up
            </button>
            <button
              className="custom_navbar_action_button download"
              onClick={() => {
                CommonHelper.Alert();
              }}
            >
              Download
            </button>
          </div>
        </div>
        {/* Mobile Responsive */}
        <div
          className="custom_navbar_drawer_main_container"
          style={{ display: drawerVisibility ? "block" : "none" }}
          onClick={() => {
            setDrawerVisibility(!drawerVisibility);
          }}
        >
          <div className="custom_navbar_drawer_sub_container">
            <div className="custom_navbar_drawer_sub_container_row_flex">
              <img
                src={website_logo}
                alt="Together We Rise"
                className="custom_navbar_website_icon"
              />
              <RiCloseLargeFill
                className="custom_navbar_drawer_close"
                onClick={() => {
                  setDrawerVisibility(!drawerVisibility);
                }}
              />
            </div>
            <div className="custom_navbar_drawer_sub_container_column_flex">
              <a className="custom_navbar_navigation_item" href="#home">
                Home
              </a>
              <a className="custom_navbar_navigation_item" href="#about">
                About
              </a>
              <a className="custom_navbar_navigation_item" href="#features">
                Features
              </a>
              <a className="custom_navbar_navigation_item" href="#stories">
                Stories
              </a>
              <a className="custom_navbar_navigation_item" href="#events">
                Upcoming Events
              </a>
            </div>
            <div className="custom_navbar_drawer_action_container">
              <div className="custom_navbar_drawer_sub_container_row_flex">
                <button
                  className="custom_navbar_action_button login"
                  onClick={() => {
                    CommonHelper.Alert();
                  }}
                >
                  Login
                </button>
                <button
                  className="custom_navbar_action_button sign_up"
                  onClick={() => {
                    CommonHelper.Alert();
                  }}
                >
                  Sign Up
                </button>
              </div>

              <button
                className="custom_navbar_action_button download res"
                onClick={() => {
                  CommonHelper.Alert();
                }}
              >
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
