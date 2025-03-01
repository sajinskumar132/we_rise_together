import React from "react";
import website_logo from "../../../../assets/website_logo.png";
import "./aboutusStyle.css";
function AboutUs() {
  return (
    <div className="about_us_main_container">
      <p className="about_us_headline">ABOUT US</p>
      <p className="about_us_sub_headline">
        Be part of a community that cares-your journey to healing starts here.
      </p>
      <div className="about_us_sub_container_1">
        <p className="about_us_paragraphs">
          At Together We Rise, we believe that no one should face depression
          alone. Our platform is designed to connect individuals struggling with
          mental health challenges, providing a safe space for support,
          encouragement, and healing. With features like{" "}
          <span className="about_us_paragraphs_span">
            sharing personal stories
          </span>
          ,<span className="about_us_paragraphs_span"> real-time chat</span>,
          <span className="about_us_paragraphs_span">
            finding mental health professionals
          </span>
          ,
          <span className="about_us_paragraphs_span">
            participating in uplifting events
          </span>
          , and 
          <span className="about_us_paragraphs_span">
            accessing daily motivation
          </span>
          , we aim to create a compassionate community where everyone feels
          heard and valued.
        </p>
        <p className="about_us_paragraphs">
          Our vision is to break the stigma surrounding mental health and build
          a world where support is just a click away. Whether you're seeking a
          listening ear, professional guidance, or a space to express yourself,
          we're here for you.
        </p>
      </div>
      <div className="about_us_logo_container">
        <div>
          <img src={website_logo} />
          <p className="about_us_logo_name">TogetherWeRise</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
