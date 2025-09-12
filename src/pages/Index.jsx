import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import about from "../assets/about.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import carctg1 from "../assets/car-ctg-01.png";
import carctg2 from "../assets/car-ctg-02.png";
import carctg3 from "../assets/car-ctg-03.png";
import carctg4 from "../assets/car-ctg-04.png";

import brand1 from "../assets/brand-01.webp";
import brand2 from "../assets/brand-02.webp";
import brand3 from "../assets/brand-03.webp";
import brand4 from "../assets/brand-04.webp";
import brand5 from "../assets/brand-05.webp";
import brand6 from "../assets/brand-06.webp";
import brand7 from "../assets/brand-07.webp";
import brand8 from "../assets/brand-08.webp";
import brand9 from "../assets/brand-09.webp";
import brand10 from "../assets/brand-10.webp";
import brand11 from "../assets/brand-11.webp";
import brand12 from "../assets/brand-12.webp";
import brand13 from "../assets/brand-13.webp";
import brand14 from "../assets/brand-14.webp";
import brand15 from "../assets/brand-15.webp";
import brand16 from "../assets/brand-16.webp";

import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";
import test4 from "../assets/test-4.jpg";
import test5 from "../assets/test-5.jpg";

import cardata from "../../Cars.json";
import blogdata from "../../Blog.json";
import { Link } from "react-router-dom";

const Index = () => {
  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const openCalender = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);

  const openreturnCalender = () => {
    if (returnPickerRef.current) {
      returnPickerRef.current.setFocus();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero w-[100%] h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidsPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          speed={1500}
          className="hero-swiper w-full h-full"
        >
          <SwiperSlide>
            <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm">
                  - Premium
                </span>
                <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                  Feel the Speed, Live the Luxury
                </h1>
                <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                  ridelux makes car rental simple, fast, and affordable. Choose
                  from a wide range of vehicles to suit your journey.
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                    View More <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Rent Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm">
                  - Premium
                </span>
                <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                  Drive Your Way, Anytime, Anywhere
                </h1>
                <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                  Exprience premium car rentaks with comfort, style, and
                  affordabllity-perfect for road trips, bussines travel, or
                  luxuray weekned getways
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                    View More <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Rent Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm">
                  - Premium
                </span>
                <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                  Elegance on Wheels, Wherever You GO
                </h1>
                <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                  Exprience premium car rentaks with comfort, style, and
                  affordabllity-perfect for road trips, bussines travel, or
                  luxuray weekned getways
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                    View More <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Rent Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* About Section */}
      <div className="about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-auto sm:h-[450px] lg:h-[600px]">
            <img
              src={about}
              alt=""
              className="rounded-3xl w-full h-full object-contain md:object-cover"
            />
            {/* <div className="curv bg-[#111111]">
              <div className="about-item-curv section-item-curv">
                <i className="ri-play-line text-xl"></i>
              </div>
            </div> */}
          </div>
          <div className="">
            <p className="uppercase text-xs md:text-sm tracking-widest text-[#e8021f] mb-2">
              - Rentax
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 bricolage-font">
              We Are More Than <br />{" "}
              <span className="text-[#e8021f] bricolage-font">
                A Car Rental Company
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed my-6 text-sm lg:text-base">
              Car repair quisque sodales dui ut varius vestibulm drana tortor
              turpis portition tellus eu euismod nisl massa nutodio in the miss
              volume place urna lacinia erros nuntna urna mauris vehicul rutrum
              in the miss on volume interdum.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Sports and Luxury Cars</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className="text-white">Economy Cars</span>
              </div>
            </div>
            <button className="bg-[#e8021f] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300 cursor-pointer">
              Read More <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <div className="banner lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="banner-content text-center">
          <p className="uppercase text-sm tracking-[5px] text-white mb-2">
            - Rent Now
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">
            Book Auto Rental
          </h2>
          <div className="bg-[#1f1f1f] text-white w-[90%] max-w-[1200px] mx-auto mt-[70px] rounded-3xl px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 shadow-lg z-50">
            {/* Cars Type*/}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                Choose Car Type{" "}
                <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
              </button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className="divide-y divide-gray-700">
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Choose Car Type
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Sports Cars
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Convertible
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Luxury Cars
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Small Cars
                  </li>
                </ul>
              </div>
            </div>

            {/* Pick Location */}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                Choose Car Location{" "}
                <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
              </button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className="divide-y divide-gray-700">
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Japan
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    New York
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Bangladesh
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Dubai
                  </li>
                </ul>
              </div>
            </div>

            {/* Pick Date */}
            <div
              className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-600 cursor-pointer"
              onClick={openCalender}
            >
              <DatePicker
                selected={pickUpDate}
                onChange={(date) => setPickUpDate(date)}
                dateFormat="dd MMM YYYY"
                placeholderText="Pick Up Date"
                ref={datePickerRef}
                className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${
                  !pickUpDate ? "text-gray-400" : ""
                }`}
                calendarClassName="dark-datepicker"
                popperPlacement="bottom-start"
              />

              <i className="ri-calendar-line text-[#e8021f] pointer-events-none"></i>
            </div>

            {/* Drop  Location */}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className="flex items-center gap-2 w-full justify-between text-gray-400">
                Drop off Location{" "}
                <i className="ri-arrow-down-s-line text-[#e8021f]"></i>
              </button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className="divide-y divide-gray-700">
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Drop off Location
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    New York
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Bangladesh
                  </li>
                  <li className="px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer">
                    Dubai
                  </li>
                </ul>
              </div>
            </div>

            {/* Return Date */}
            <div
              className="relative w-full lg:w-auto px-4 py-3 flex items-center lg:border-0 border-r border-gray-600"
              onClick={openreturnCalender}
            >
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd MMM YYYY"
                placeholderText="Return Date"
                ref={returnPickerRef}
                className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${
                  !returnDate ? "text-gray-400" : ""
                }`}
                calendarClassName="dark-datepicker"
                popperPlacement="bottom-start"
              />

              <i className="ri-calendar-line text-[#e8021f] pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Car Categories */}
      <div className="car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="car-categories-content text-center mb-10 lg:mb-14">
          <p className="uppercase text-sm tracking-[5px] mb-2 text-[#e8021f]">
            - Car Categories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">
            Choose the Right Car for Your Trip
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">
                Luxury Cars
              </h4>
              <span className="text-gray-400 text-lg xxl:text-xl bricolage-font">
                40+ Cars Ready
              </span>
            </div>
            <div className="car-ctg w-full h-full">
              <img
                src={carctg1}
                alt="car-image"
                className="w-[100%] h-full object-cover translate-x-10 translate-y-10"
              />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">
                SUVs
              </h4>
              <span className="text-gray-400 text-lg xxl:text-xl bricolage-font">
                70+ Cars Ready
              </span>
            </div>
            <div className="car-ctg w-full h-full">
              <img
                src={carctg2}
                alt="car-image"
                className="w-[100%] h-full object-cover translate-x-10 translate-y-10"
              />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">
                Economy Cars
              </h4>
              <span className="text-gray-400 text-lg xxl:text-xl bricolage-font">
                100+ Cars Ready
              </span>
            </div>
            <div className="car-ctg w-full h-full">
              <img
                src={carctg3}
                alt="car-image"
                className="w-[100%] h-full object-cover translate-x-10 translate-y-10"
              />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">
                Vans & MPVs
              </h4>
              <span className="text-gray-400 text-lg xxl:text-xl bricolage-font">
                60+ Cars Ready
              </span>
            </div>
            <div className="car-ctg w-full h-full">
              <img
                src={carctg4}
                alt="car-image"
                className="w-[100%] h-full object-cover translate-x-10 translate-y-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="bg-[#222222] w-full lg:px-[12%] px-[8%] py-[50px]">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          autoplay={true}
          className="brands-swiper flex justify-center items-center"
          breakpoints={{
            1399: {
              slidesPerView: 6,
            },
            767: {
              slidesPerView: 4,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand1}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand2}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand3}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand4}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand5}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand6}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand7}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand8}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand9}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand10}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand11}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand12}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand13}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand14}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand15}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img
                src={brand16}
                alt="brand-image"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Service */}
      <div className="our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="our-service-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#e8021f] mb-2">
            - What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bricolage-font">
            Others Services
          </h2>
        </div>
        <div className="our-service-wrapper">
          <div className="grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 bricolage-font">
                Daily Car Rental
              </h5>
              <p className="text-[#999] text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt facere architecto quas at minus officiis! Voluptatem
                tenetur dolore sint perspiciatis.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">1.</div>
              </div>
            </div>
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 bricolage-font">
                Monthly Car Rental
              </h5>
              <p className="text-[#999] text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt facere architecto quas at minus officiis! Voluptatem
                tenetur dolore sint perspiciatis.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">2.</div>
              </div>
            </div>
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className="font-semibold text-3xl mb-3 bricolage-font">
                Annual Car Rental
              </h5>
              <p className="text-[#999] text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt facere architecto quas at minus officiis! Voluptatem
                tenetur dolore sint perspiciatis.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">3.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cars */}
      <div className="car lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="car-categories-content text-center mb-10 lg:mb-14">
          <p className="uppercase text-sm tracking-[5px] mb-2 text-[#e8021f]">
            - Cars
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">
            Find Your Trip
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cardata.map((car) => (
            <div
              className="car-item group bg-[#1e1f22] relative w-full"
              key={car.id}
            >
              <div className="car-image w-full relative h-[250px] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover md:object-center group-hover:scale-110 transition-all duration-300"
                />
                <div className="car-info absolute bottom-0 p-5 left-0 z-10">
                  <h4 className="text-2xl md:text-3xl bricolage-font text-white font-semibold">
                    {car.name}
                  </h4>
                  <span className="text-red-100 bricolage-font text-xl">
                    {car.type}
                  </span>
                </div>
              </div>
              <div className="car-content p-5 py-10 relative">
                <ul className="flex gap-3 justify-between items-center flex-wrap">
                  <li className="text-gray-300 text-lg md:text-xl">
                    <i className="fa-regular fa-user text-[#e8021f] pe-2"></i>
                    {car.seats}
                  </li>
                  <li className="text-gray-300 text-lg md:text-xl">
                    <i className="fa-regular fa-user text-[#e8021f] pe-2"></i>
                    {car.transmission}
                  </li>
                  <li className="text-gray-300 text-lg md:text-xl">
                    <i className="fa-regular fa-user text-[#e8021f] pe-2"></i>
                    {car.speed}
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-12">
                  <h4 className="text-2xl md:text-4xl text-gray-400 font-bold bricolage-font">
                    $ {car.price}/day
                  </h4>
                  <Link to={`/car/${car.id}`}>
                    <button className="text-white bg-red-600 hover:bg-black transition-all duration-300 px-5 py-3 text-lg md:text-xl rounded-full cursor-pointer">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonials lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="testimonials-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#e8021f] mb-2">
            - Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bricolage-font">
            Trusted By Thousands{" "}
            <span className="text-[#e8021f] bricolage-font">Of RideLux</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {/* 1 */}
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg mb-6 bricolage-font">
                The driver service option made our business trip stress-free.
                Highly recommend the premium rides.
              </div>
              <div className="flex items-center mt-6">
                <div className="curv">
                  <div className="service-item-curv section-item-curv bg-transparent test-curve">
                    <img src={test1} alt="user" className="rounded-full mr-4" />
                  </div>
                </div>
                <div className="ps-[100px]">
                  <p className="bricolage-font text-xl text-[#e8021f]">
                    Aaron P
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">
                    Corporate Client
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 2 */}
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg mb-6 bricolage-font">
                We needed a van for a weekend trip, and GetnGo delivered on time
                with excellent support.
              </div>
              <div className="flex items-center mt-6">
                <div className="curv">
                  <div className="service-item-curv section-item-curv bg-transparent test-curve">
                    <img src={test2} alt="user" className="rounded-full mr-4" />
                  </div>
                </div>
                <div className="ps-[100px]">
                  <p className="bricolage-font text-xl text-[#e8021f]">
                    Emily W
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">
                    Family Vacation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg mb-6 bricolage-font">
                Booking with RideLux was seamless, and the driver was very
                professional throughout the journey.
              </div>
              <div className="flex items-center mt-6">
                <div className="curv">
                  <div className="service-item-curv section-item-curv bg-transparent test-curve">
                    <img src={test3} alt="user" className="rounded-full mr-4" />
                  </div>
                </div>
                <div className="ps-[100px]">
                  <p className="bricolage-font text-xl text-[#e8021f]">
                    James L
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">
                    Business Trip
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg mb-6 bricolage-font">
                Smooth booking, friendly driver, and very clean car. Would
                definitely use RideLux again!
              </div>
              <div className="flex items-center mt-6">
                <div className="curv">
                  <div className="service-item-curv section-item-curv bg-transparent test-curve">
                    <img src={test4} alt="user" className="rounded-full mr-4" />
                  </div>
                </div>
                <div className="ps-[100px]">
                  <p className="bricolage-font text-xl text-[#e8021f]">
                    Sophia K
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">Traveler</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 5 */}
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-white mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg mb-6 bricolage-font">
                Excellent service, punctual drivers, and very comfortable rides.
                Highly recommended!
              </div>
              <div className="flex items-center mt-6">
                <div className="curv">
                  <div className="service-item-curv section-item-curv bg-transparent test-curve">
                    <img src={test5} alt="user" className="rounded-full mr-4" />
                  </div>
                </div>
                <div className="ps-[100px]">
                  <p className="bricolage-font text-xl text-[#e8021f]">
                    Daniel R
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">
                    Frequent User
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Blog Section */}
      <div className="blog lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="blog-content mb-20 text-center text-white">
          <p className="uppercase text-sm tracking-[5px] text-[#e8021f] mb-2">
            - Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bricolage-font">
            Latest{" "}
            <span className="text-[#e8021f] bricolage-font">News</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogdata.slice(0,3).map((blog) => (
            <div className="blog-item bg-[#1f1f22] group" key={blog.id}>
              <div className="blog-image overflow-hidden">
                <img src={blog.image} alt={blog.title} className="group-hover:scale-110 transition-all duration-300 w-full h-[250px] object-cover" />
              </div>
              <div className="blog-content p-5 py-8">
                <div className="ate bg-red-600 w-fit px-4 py-0.5 text-md text-white bricolage-font rounded-md mb-3">
                  {blog.date}
                </div>
                <h4 className="text-lg lg:text-2xl bricolage-font text-white font-semibold uppercase">{blog.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
