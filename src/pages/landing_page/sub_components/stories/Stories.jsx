import React from "react";
import "./storiesStyle.css";
import { stories_helper } from "./stories_helper";
function Stories() {
  return (
    <div className="stories_main_container">
      <p className="stories_headline">Stories of Strength & Hope</p>
      <p className="stories_sub_headline">
        Real people. Real struggles. Real comebacks.
      </p>
      <div className="stories_video_container">
        {stories_helper.map((item, index) => (
          <iframe
            key={index}
            className="stories_video_frame"
            src={item}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default Stories;
