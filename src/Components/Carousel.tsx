import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
export default function Carousel() {
    console.log(">> HA THANH");
    
  return (
    <div className="p-3">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/banner_hang_236469d88ddc4ccca088f859d8eba7b4.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/banner_web_15_02_23_bc417e51b3bb4665845c5e80fa268e1c.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/banner_2_96adf49e82994b58b82650a099d809ef.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/back_to_work_1db2e79259ec41bc8ab75e7815ec8b72.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/banner_web_13_03_2023_ebc18ee621eb42aa80e5962a682da2fd.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://file.hstatic.net/200000182297/file/banner_web_15_02_23_2_1fe586adf7d84d8bb4770512bc60310d.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto rounded-lg" src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=636" alt="slider"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
