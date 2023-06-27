"use client"
import Carousel from "../Components/Carousel";
import {IoArrowForward} from"react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import {HiOutlineArrowSmallRight,HiOutlineArrowSmallLeft} from "react-icons/hi2"
// import required modules
import { Pagination, Navigation } from "swiper";
import React, { useRef } from 'react';
import { ProductCart } from './../Components/ProductCart';




const data=[
  {url:"https://product.hstatic.net/200000182297/product/4_438a9e860c844794a6d249f5a472f1e9_master.jpg", id:1},
  {url:"https://product.hstatic.net/200000182297/product/d099821432283000401p1699dt_1__8f91e456ca9b4650a3551748a8a23c7d_master.jpg", id:2},
  {url:"https://product.hstatic.net/200000182297/product/d099821432283000401p1699dt_2__484bac66632e4e11971a7c5cbe249973_master.jpg", id:3},
  {url:"https://product.hstatic.net/200000182297/product/d099821432283000401p1699dt_3__15686523fd02432082290c58d1df712e_master.jpg", id:4}
]
export default function Home() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className=''>
        <Carousel/>
        <div className="mx-auto max-w-6xl mt-6" >
          <div>
            <h2 className="text-4xl text-blue-600 text-center mb-4 font-extrabold">KHUYẾN MÃI CỰC LỚN</h2>
            <section className="mt-12 mx-5">
              <h2 className="text-2xl text-blue-600 text-center mb-4 font-extrabold">Đồng giá 149K</h2>
              <hr className="border-blue-400 mb-6"/>
              <section className="relative z-10">
                <Swiper
                  onSlideChange={(swiper) => console.log('slide change:::', swiper)}
                  slidesPerView={4}
                  spaceBetween={10}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className="mySwiper "
                  breakpoints={{
                    // when window width is >= 640px
                    0: {
                      width: null,
                      slidesPerView: 1,
                    },
                    300: {
                      width: null,
                      slidesPerView: 2,
                    },
                    640: {
                      width: null,
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                      width: null,
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide><div className=""><ProductCart/></div></SwiperSlide>
                  <SwiperSlide><div className=""><ProductCart/></div></SwiperSlide>
                  <SwiperSlide><div className=""><ProductCart/></div></SwiperSlide>
                  <SwiperSlide><div className=""><ProductCart/></div></SwiperSlide>
                  <SwiperSlide><div className="text-black h-full pt-[150%] relative"><p className="absolute top-0 w-full h-full flex justify-center items-center"><span>Xem them</span></p></div></SwiperSlide>

                </Swiper>
                
                <button className="w-8 h-8 rounded-[50%] bg-[#000000d8] flex justify-center items-center text-white absolute z-10 xl:top-[35%] lg: top-[30%] -left-4"  onClick={() => swiperRef.current?.slidePrev()}><HiOutlineArrowSmallLeft/></button>
                <button className="w-8 h-8 rounded-[50%] bg-[#000000d8] flex justify-center items-center text-white absolute z-10 xl:top-[35%] lg: top-[30%] -right-4"  onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmallRight/></button>
          
              </section>
              <p className="font-bold flex justify-center mt-10">
                <button className="px-3 py-2 flex text-black items-center rounded-sm font-bold active:bg-[#00000070] md:hover:bg-[#00000070]" >Xem thêm <IoArrowForward className="ml-1"/></button>
              </p>
            </section>
            <section className="mt-12 mx-5">
              <h2 className="text-2xl text-blue-600 text-center mb-4 font-extrabold">Sale lên đến 50% </h2>
              <hr className="border-blue-400 mb-6"/>
              <section className="grid grid-cols-12 md:gap-8 gap-4">
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              </section>
              <p className="font-bold flex justify-center mt-10">
                <button className="px-3 py-2 flex text-black items-center rounded-sm font-bold active:bg-[#00000070] md:hover:bg-[#00000070]" >Xem thêm <IoArrowForward className="ml-1"/></button>
              </p>
            </section>
          </div>
          <div>
            <h2 className="text-4xl text-blue-600 text-center mb-4 font-extrabold">BỘ SƯU TẬP</h2>
            <section className="mt-12 mx-5">
              <h2 className="text-2xl text-blue-600 text-center mb-4 font-extrabold">Endless Summer</h2>
              <hr className="border-blue-400 mb-6"/>
              <section className="grid grid-cols-12 md:gap-8 gap-4">
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              </section>
              <p className="font-bold flex justify-center mt-10">
                <button className="px-3 py-2 flex text-black items-center rounded-sm font-bold active:bg-[#00000070] md:hover:bg-[#00000070]" >Xem thêm <IoArrowForward className="ml-1"/></button>
              </p>
            </section>
            <section className="mt-12 mx-5">
              <h2 className="text-2xl text-blue-600 text-center mb-4 font-extrabold">Nature is calling</h2>
              <hr className="border-blue-400 mb-6"/>
              <section className="grid grid-cols-12 md:gap-8 gap-4">
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              </section>
              <p className="font-bold flex justify-center mt-10">
                <button className="px-3 py-2 flex text-black items-center rounded-sm font-bold active:bg-[#00000070] md:hover:bg-[#00000070]" >Xem thêm <IoArrowForward className="ml-1"/></button>
              </p>
            </section>
          </div>
          <section className="mt-12 mx-5">
            <h2 className="text-4xl text-blue-600 text-center mb-4 font-extrabold">SẢN PHẨM MỚI</h2>
            <hr className="border-blue-400 mb-6"/>
            <section className="grid grid-cols-12 md:gap-8 gap-4">
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
            </section>
            <p className="font-bold flex justify-center mt-10">
              <button className="px-3 py-2 flex text-black items-center rounded-sm font-bold active:bg-[#00000070] md:hover:bg-[#00000070]" >Xem thêm <IoArrowForward className="ml-1"/></button>
            </p>
          </section>
      
        </div>
    </div>
  )
}
