import React from "react";
import "./customCardV1Style.css";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
function CustomCardV1({ image, title, date, time, mode, action }) {
  return (
    <div className="custom_card_v1_main_container">
      <img src={image} className="custom_card_v1_image" />
      <div className="custom_card_v1_sub_container_1">
        <p className="custom_card_v1_title">{title} <span className="custom_card_v1_container_mode">{mode}</span></p>
        <div className="custom_card_v1_date_and_time_container">
          <div className="custom_card_v1_date_and_time_flex_container">
            <HiOutlineCalendarDateRange className="custom_card_v1_date_icon" />
            <p>{date}</p>
          </div>
          <div className="custom_card_v1_date_and_time_flex_container">
            <FaRegClock className="custom_card_v1_time_icon"/>
            <p>{time}</p>
          </div>
        </div>
        <div className="custom_card_v1_action_container">{action}</div>
      </div>
    </div>
  );
}

export default CustomCardV1;
