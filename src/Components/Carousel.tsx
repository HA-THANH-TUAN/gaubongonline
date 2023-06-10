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
    <div className="">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
        <SwiperSlide><Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="https://gaubongonline.vn/wp-content/uploads/2023/05/thang-6_Banner-qua-tang.jpg" alt="slider"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
