import React from "react";
import "./storiesStyle.css";
import { stories_helper } from "./stories_helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";;
// import required modules

function Stories() {
  return (
    <div id="stories" className="stories_main_container">
      <p className="stories_headline">Stories of Strength & Hope</p>
      <p className="stories_sub_headline">
        Real people. Real struggles. Real comebacks.
      </p>
      <div className="stories_video_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ 
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 5 },
          600: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {stories_helper.map((item, index) => (
          <SwiperSlide id={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
        
      </div>
    </div>
  );
}

export default Stories;
