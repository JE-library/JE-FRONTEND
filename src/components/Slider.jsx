// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
    >
      <SwiperSlide><img src="/image1.jpg" alt="Image 1" /></SwiperSlide>
      <SwiperSlide><img src="/image2.jpg" alt="Image 2" /></SwiperSlide>
      <SwiperSlide><img src="/image3.jpg" alt="Image 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
