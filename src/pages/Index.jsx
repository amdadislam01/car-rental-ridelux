import React, { useRef, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules'

import about from '../assets/about.jpg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import carctg1 from '../assets/car-ctg-01.png';
import carctg2 from '../assets/car-ctg-02.png';
import carctg3 from '../assets/car-ctg-03.png';
import carctg4 from '../assets/car-ctg-04.png';

import brand1 from '../assets/brand-01.webp';
import brand2 from '../assets/brand-02.webp';
import brand3 from '../assets/brand-03.webp';
import brand4 from '../assets/brand-04.webp';
import brand5 from '../assets/brand-05.webp';
import brand6 from '../assets/brand-06.webp';
import brand7 from '../assets/brand-07.webp';
import brand8 from '../assets/brand-08.webp';
import brand9 from '../assets/brand-09.webp';
import brand10 from '../assets/brand-10.webp';
import brand11 from '../assets/brand-11.webp';
import brand12 from '../assets/brand-12.webp';
import brand13 from '../assets/brand-13.webp';
import brand14 from '../assets/brand-14.webp';
import brand15 from '../assets/brand-15.webp';
import brand16 from '../assets/brand-16.webp';

const Index = () => {

  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null)

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
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero w-[100%] h-screen overflow-hidden">
        <Swiper modules={[Autoplay]} slidsPerView={1} spaceBetween={0} loop={true} autoplay={{
          delay: 2000,
        }} speed={1500} className="hero-swiper w-full h-full" >
          <SwiperSlide>
          <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className='bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm'>- Premium</span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">Feel the Speed, Live the Luxury</h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">You can Rent any of our Luxurious Cars.</p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                ridelux makes car rental simple, fast, and affordable. Choose from a wide range of vehicles to suit your journey.
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className='default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer'>View More <i className="bi bi-arrow-up-right"></i></button>
                <button className='default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer'>Rent Now <i className="bi bi-arrow-up-right"></i></button>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className='bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm'>- Premium</span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">Drive Your Way, Anytime, Anywhere</h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">You can Rent any of our Luxurious Cars.</p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                Exprience premium car rentaks with comfort, style, and affordabllity-perfect for road trips, bussines travel, or luxuray weekned getways
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className='default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer'>View More <i className="bi bi-arrow-up-right"></i></button>
                <button className='default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer'>Rent Now <i className="bi bi-arrow-up-right"></i></button>
              </div>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className='bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm'>- Premium</span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">Elegance on Wheels, Wherever You GO</h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">You can Rent any of our Luxurious Cars.</p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                Exprience premium car rentaks with comfort, style, and affordabllity-perfect for road trips, bussines travel, or luxuray weekned getways
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className='default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer'>View More <i className="bi bi-arrow-up-right"></i></button>
                <button className='default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1 cursor-pointer'>Rent Now <i className="bi bi-arrow-up-right"></i></button>
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
            <img src={about} alt="" className='rounded-3xl w-full h-full object-contain md:object-cover' />
            <div className="curv bg-[#111111]">
              <div className="about-item-curv section-item-curv">
                <i className="ri-play-line text-xl"></i>
              </div>
            </div>
          </div>
          <div className="">
            <p className="uppercase text-xs md:text-sm tracking-widest text-[#e8021f] mb-2">- Rentax</p>
            <h2 className='text-3xl md:text-5xl font-bold mb-3 bricolage-font'>We Are More Than <br /> <span className='text-[#e8021f] bricolage-font'>A Car Rental Company</span></h2>
            <p className="text-gray-400 leading-relaxed my-6 text-sm lg:text-base">
              Car repair quisque sodales dui ut varius vestibulm drana tortor turpis portition tellus eu euismod nisl massa nutodio in the miss volume place 
              urna lacinia erros nuntna urna mauris vehicul rutrum in the miss on volume interdum.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className='text-white'>Sports and Luxury Cars</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]">
                  <i className="ri-check-double-line"></i>
                </div>
                <span className='text-white'>Economy Cars</span>
              </div>
            </div>
            <button className='bg-[#e8021f] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300 cursor-pointer'>
              Read More <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <div className="banner lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="banner-content text-center">
          <p className="uppercase text-sm tracking-[5px] text-white mb-2">- Rent Now</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">Book Auto Rental</h2>
          <div className="bg-[#1f1f1f] text-white w-[90%] max-w-[1200px] mx-auto mt-[70px] rounded-3xl px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 shadow-lg z-50">

            {/* Cars Type*/}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className='flex items-center gap-2 w-full justify-between text-gray-400'>Choose Car Type <i className="ri-arrow-down-s-line text-[#e8021f]"></i></button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className='divide-y divide-gray-700'>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Choose Car Type</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Sports Cars</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Convertible</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Luxury Cars</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Small Cars</li>
                </ul>
              </div>
            </div>

            {/* Pick Location */}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className='flex items-center gap-2 w-full justify-between text-gray-400'>Choose Car Location <i className="ri-arrow-down-s-line text-[#e8021f]"></i></button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className='divide-y divide-gray-700'>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Japan</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>New York</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Bangladesh</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Dubai</li>
                </ul>
              </div>
            </div>

            {/* Pick Date */}
            <div className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-600 cursor-pointer" onClick={openCalender}>
              <DatePicker 
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="dd MMM YYYY"
              placeholderText='Pick Up Date'
              ref={datePickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement='bottom-start'
              />

              <i className='ri-calendar-line text-[#e8021f] pointer-events-none'></i>
            </div>

            {/* Drop  Location */}
            <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
              <button className='flex items-center gap-2 w-full justify-between text-gray-400'>Drop off Location <i className="ri-arrow-down-s-line text-[#e8021f]"></i></button>
              <div className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#e8021f] rounded-sm shadow-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <ul className='divide-y divide-gray-700'>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Drop off Location</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>New York</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Bangladesh</li>
                  <li className='px-4 py-2 hover:bg-[#e8021f] transition cursor-pointer'>Dubai</li>
                </ul>
              </div>
            </div>

            {/* Return Date */}
            <div className="relative w-full lg:w-auto px-4 py-3 flex items-center lg:border-0 border-r border-gray-600" onClick={openreturnCalender}>
              <DatePicker 
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd MMM YYYY"
              placeholderText='Return Date'
              ref={returnPickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement='bottom-start'
              />

              <i className='ri-calendar-line text-[#e8021f] pointer-events-none'></i>
            </div>
          </div>
        </div>
      </div>
      {/* Car Categories */}
      <div className="car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="car-categories-content text-center mb-10 lg:mb-14">
          <p className="uppercase text-sm tracking-[5px] mb-2 text-[#e8021f]">- Car Categories</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font'>Choose the Right Car for Your Trip</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">Luxury Cars</h4>
              <span className='text-gray-400 text-lg xxl:text-xl bricolage-font'>40+ Cars Ready</span>
            </div>
            <div className="car-ctg w-full h-full">
              <img src={carctg1} alt="car-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">SUVs</h4>
              <span className='text-gray-400 text-lg xxl:text-xl bricolage-font'>70+ Cars Ready</span>
            </div>
            <div className="car-ctg w-full h-full">
              <img src={carctg2} alt="car-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">Economy Cars</h4>
              <span className='text-gray-400 text-lg xxl:text-xl bricolage-font'>100+ Cars Ready</span>
            </div>
            <div className="car-ctg w-full h-full">
              <img src={carctg3} alt="car-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
            </div>
          </div>
          <div className="bg-[#1e1e23] h-auto md:h-[400px] car-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full">
            <div className="car-ctg-info p-4">
              <h4 className="text-white text-3xl xxl:text-4xl  font-semibold bricolage-font pb-1">Vans & MPVs</h4>
              <span className='text-gray-400 text-lg xxl:text-xl bricolage-font'>60+ Cars Ready</span>
            </div>
            <div className="car-ctg w-full h-full">
              <img src={carctg4} alt="car-image" className='w-[100%] h-full object-cover translate-x-10 translate-y-10' />
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
        className='brands-swiper flex justify-center items-center'
        breakpoints={{
          1399: {
            slidesPerView: 6
          },
          767: {
            slidesPerView: 4
          },
          575: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        }}
        >
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand1} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand2} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand3} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand4} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand5} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand6} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand7} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand8} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand9} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand10} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand11} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand12} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand13} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand14} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand15} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center">
              <img src={brand16} alt="brand-image" className='w-full h-full object-contain md:object-cover' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Index
