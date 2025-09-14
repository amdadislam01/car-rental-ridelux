import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import about from "../assets/about.jpg";

import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";
import test4 from "../assets/test-4.jpg";
import test5 from "../assets/test-5.jpg";

import carctg1 from "../assets/car-ctg-01.png";
import carctg2 from "../assets/car-ctg-02.png";
import carctg3 from "../assets/car-ctg-03.png";
import carctg4 from "../assets/car-ctg-04.png";

const About = () => {
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
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - RideLux
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-red-600">
            <span className="text-white bricolage-font">About </span>Us
          </h1>
        </div>
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
      {/* Teams */}
      <div className="lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="text-center">
          <p className="uppercase text-sm tracking-[5px] text-[#e8021f] mb-2">
            Certified Team 
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3  bricolage-font text-white">
            Other Experts <span className="text-red-600">Team</span>
          </h2>
        </div>

        <Swiper 
        modules={[Autoplay, Pagination]}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 3000,
        }}
        pagination={true}
        breakpoints={{
          1400: {slidesPerView: 3},
          1199: {slidesPerView: 2},
          767: {slidesPerView: 1.5},
          0: {slidesPerView: 1},
        }}
        className="mt[70px]"
        >
          {/* slide 1 */}
          <SwiperSlide>
            <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={test1} alt="trems-image" className="w-full h-72 object-cover z-[5]"  />
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold  bricolage-font text-white">Margaret Nancy</h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
            <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={test2} alt="trems-image" className="w-full h-72 object-cover z-[5]"  />
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold  bricolage-font text-white">Danil Martin</h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={test3} alt="trems-image" className="w-full h-72 object-cover z-[5]"  />
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold  bricolage-font text-white">Michal Brown</h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 4 */}
          <SwiperSlide>
            <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={test4} alt="trems-image" className="w-full h-72 object-cover z-[5]"  />
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold  bricolage-font text-white">Omit Shaa</h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 5 */}
          <SwiperSlide>
            <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={test5} alt="trems-image" className="w-full h-72 object-cover z-[5]"  />
              <div className="team-info">
                <h4 className="text-xl lg:text-2xl mb-1 font-semibold  bricolage-font text-white">Margaret Nancy</h4>
                <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default About;
