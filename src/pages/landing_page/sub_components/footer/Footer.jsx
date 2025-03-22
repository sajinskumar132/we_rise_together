import React from "react";
import website_logo from "../../../../assets/website_logo.png";
import "./footerStyle.css";
import { IoSend } from "react-icons/io5";
import CommonHelper from "../../../../helpers/commonHelper";
function Footer() {
  return (
    <div className="footer_main_container">
      <div className="footer_sub_container">
        <div className="footer_sub_container_with_logo_para">
          <img src={website_logo} className="footer_sub_container_with_logo" />
          {/* <p>No One Should Face Depression Alone.</p> */}
        </div>
        <div>
          <p className="footer_main_header">quick link</p>
          <p className="footer_sub_text">Home</p>
          <p className="footer_sub_text">About</p>
          <p className="footer_sub_text">Features</p>
          <p className="footer_sub_text">Stories</p>
          <p className="footer_sub_text">Upcoming Events</p>
        </div>
        <div>
          <p className="footer_main_header">News Letter</p>
          <p className="footer_sub_text">Subscribe our newsletter to get our latest update & news</p>
          <div className="footer_input_field_main_container">
             <input placeholder="Enter your email" className="footer_input_field"/>
              <div className="footer_input_field_send_action_button" onClick={()=>{
              CommonHelper.Alert()
              }}>
                <IoSend />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
