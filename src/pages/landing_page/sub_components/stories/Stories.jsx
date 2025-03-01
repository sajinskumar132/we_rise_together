import React from "react";
import './storiesStyle.css'
function Stories() {
  return (
    <div className="stories_main_container">
      <p className="stories_headline">Stories of Strength & Hope</p>
      <p className="stories_sub_headline">Real people. Real struggles. Real comebacks.</p>
      <div className="stories_video_container">
        <iframe
           className="stories_video_frame"
        //   width="560"
        //   height="315"
          src="https://www.youtube.com/embed/UD0tnoDgC-8?si=qzVGlg_Spqe8x2mR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="stories_video_frame"
          src="https://www.youtube.com/embed/3r1vz2ML-HI?si=EsrB1CB3TNu6PBQg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="stories_video_frame"
          src="https://www.youtube.com/embed/d96akWDnx0w?si=OonKJwz4r-e01K-t"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Stories;
