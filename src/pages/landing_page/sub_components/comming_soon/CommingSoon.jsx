import React from "react";
import website_logo from "../../../../assets/website_logo.png";
import "./commingSoonStyle.css";
function CommingSoon() {
  return (
    <div className="comming_soon_super_main_container">
      <div className="comming_soon_main_container">
        <div>
          <p className="coming_soon_title">Coming Soon On : A Community of Hope and Healing</p>
          <p className="coming_soon_paragarph">
            At Together We Rise, we are building a safe and supportive space
            where no one has to face depression alone. Our platform will soon be
            live, offering real-time chat, personal story sharing, access to
            mental health professionals, uplifting events, and daily motivation.
          </p>
          <p className="coming_soon_paragarph">
            We’re on a mission to break the stigma surrounding mental health and
            ensure that support is always just a click away. Stay tuned as we
            prepare to launch a compassionate community where everyone feels
            heard, valued, and empowered.
          </p>
          <p>Your journey to healing starts soon. Stay connected!</p>
        </div>
        <div>
          <div>
            <img src={website_logo} className="comming_soon_logo" />
            <p className="comming_soon_logo_name">TogetherWeRise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
