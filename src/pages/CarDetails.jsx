import React, { useRef, useState } from "react";

import cardata from "../../Cars.json";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const car = cardata.find((c) => c.id === id);
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rentalContitions = [
    {
      title: "Contract and Annexes",
      description:
        "At the time of vehicle delivery, a rental agreement must be signed. For individual customers, a valid credit card is required. For corporate customers, official company documents (tax certificate, signature circular, ID photocopy) must be provided.",
    },
    {
      title: "Driving License and Age",
      description:
        "The minimum rental age is 21, and the driver must hold a valid driving license for at least 2 years. For luxury and upper-class vehicles, higher age and license requirements may apply.",
    },
    {
      title: "Prices",
      description:
        "Rental prices are calculated on a daily basis and include a fixed mileage limit. Fuel, bridge, highway, and toll fees are not included in the rental price.",
    },
    {
      title: "Payments",
      description:
        "Payment is required in advance at the beginning of the rental period. A valid credit card is mandatory for deposit and guarantee purposes. Additional charges may apply for extras such as GPS, baby seat, or additional drivers.",
    },
    {
      title: "Delivery",
      description:
        "Vehicles are delivered with a full fuel tank, clean, and in safe condition. At the end of the rental, the car must be returned with the same fuel level and condition. Any missing fuel or damages will be charged to the customer.",
    },
    {
      title: "Traffic Fines",
      description:
        "All traffic fines, tolls, and penalties incurred during the rental period are the responsibility of the renter. In case of late notification of fines, additional service fees may apply.",
    },
  ];

  if (!car)
    return <div className="text-white text-center mt-20">Car Not Found</div>;

  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
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
      <div className="bg-[#121212] text-white font-sans">
        <div
          className="relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20"
          style={{ backgroundImage: `url(${car.image})` }}
        >
          <div className="absolute inset-0 cars-det-section"></div>
          <div className="relative z-10">
            <h6 className="uppercase text-xl tracking-widest text-red-500 bricolage-font">
              Luxury Cars
            </h6>
            <h1 className="text-4xl lg:text-6xl font-bold bricolage-font">
              {car.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 px-[12%] py-14">
        <div className="flex-1 space-y-12">
          <section className="text-white">
            <h2 className="text-2xl font-bold mb-4 bricolage-font text-white">
              Gemeral Information
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Enjoy a premium car rental experience with top-notch Services and
              flexible conditions.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center hover:text-white transition">
                <i className="ri-check-line text-red-600 mr-2"></i>
                24/7 Roadside Assistance
              </li>
              <li className="flex items-center hover:text-white transition">
                <i className="ri-check-line text-red-600 mr-2"></i>
                Free Cancellation & Return
              </li>
              <li className="flex items-center hover:text-white transition">
                <i className="ri-check-line text-red-600 mr-2"></i>
                Pay at Arrival
              </li>
            </ul>
          </section>

          <section className="text-white">
            <h2 className="text-2xl text-white font-bold mb-4 bricolage-font">
              Rental Conditions
            </h2>
            <div className="space-y-4">
              {rentalContitions.map((item, index) => (
                <div
                  className="bg-[#1a1a1a] rounded-xl overflow-hidden"
                  key={index}
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-[#2a2a2a] transition duration-300"
                  >
                    <span className="font-medium text-sm">
                      {index + 1}.{item.title}
                    </span>
                    <i
                      className={`ri-arrow-${
                        openIndex === index ? "up" : "down"
                      }-s-line text-red-600`}
                    ></i>
                  </div>
                  <div
                    className={`px-6 text-sm text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[300px] pt-5 pb-4"
                        : "max-h-0 pt-0"
                    }`}
                  >
                    {openIndex === index && <div>{item.description}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full lg:w-[320px] space-y-6 bg-[#1a1a1a] rounded-2xl p-6 shadow-md h-full">
          <div className="text-center">
            <p className="text-5xl font-bold text-white bricolage-font">
              $ {car.price}{" "}
              <span className="text-sm font-medium bricolage-font text-white">
                / Rent Per Day
              </span>
            </p>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-door-line text-red-600 mr-2"></i>
                  Doors
                </span>
                <span>{car.door}</span>
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-user-line text-red-600 mr-2"></i>
                  Passengers
                </span>
                <span>{car.passengers}</span>
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-settings-2-line text-red-600 mr-2"></i>
                  Transmission
                </span>
                <span> {car.transmission}</span>
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-suitcase-line text-red-600 mr-2"></i>
                  Luggage
                </span>
                <span>{car.Bages}</span>
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-snowflake-line text-red-600 mr-2"></i>
                  Air Condition
                </span>
                <span> (Yes)</span>
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span>
                  <i className="ri-user-star-line text-red-600 mr-2"></i>
                  Age
                </span>
                <span> -25</span>
              </span>
            </li>
          </ul>
          <div className="flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 bg-red-600 text-white text-[20px] rounded-xl py-2 hover:bg-red-600/90 transition cursor-pointer bricolage-font"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2">
          <div className="bg-[#0d0d0d]/90 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="bg-red-600 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-white bricolage-font">
                Book Your Dream Car
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white text-xl sm:text-2xl hover:scale-110 transition"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

      
            {/* Form section */}
            <form
              className="p-6 space-y-6 my-4 popup-form bg-[#1a1a1a] rounded-xl shadow-lg"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
                setShowSuccessModal(true);
              }}
            >
              {/* Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                    required
                  />
                </div>

                {/* Car Type */}
                <div>
                  <select
                    required
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option hidden>Choose Car Type</option>
                    <option>Lamborghini</option>
                    <option>Rolls Royce</option>
                    <option>Bentley</option>
                  </select>
                </div>

                {/* Pick-Up Location */}
                <div>
                  <select
                    required
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option hidden>Pick-Up Location</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Bangladesh</option>
                  </select>
                </div>

                {/* Pick-Up Date */}
                <div className="relative">
                  <DatePicker
                    selected={pickUpDate}
                    onChange={(date) => setPickUpDate(date)}
                    dateFormat="dd MMM yyyy"
                    placeholderText="Pick Up Date"
                    ref={datePickerRef}
                    className={`w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none ${
                      !pickUpDate ? "text-gray-400" : ""
                    }`}
                    calendarClassName="dark-datepicker"
                    popperPlacement="bottom-start"
                  />
                  <i className="ri-calendar-line absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"></i>
                </div>

                {/* Drop-Off Location */}
                <div>
                  <select
                    required
                    className="w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option hidden>Drop-Off Location</option>
                    <option>Sharjah</option>
                    <option>Al Ain</option>
                  </select>
                </div>

                {/* Drop-Off Date */}
                <div className="relative">
                  <DatePicker
                    selected={dropOffDate}
                    onChange={(date) => setDropOffDate(date)}
                    dateFormat="dd MMM yyyy"
                    placeholderText="Drop Off Date"
                    ref={returnPickerRef}
                    className={`w-full h-[50px] px-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none ${
                      !dropOffDate ? "text-gray-400" : ""
                    }`}
                    calendarClassName="dark-datepicker"
                    popperPlacement="bottom-start"
                  />
                  <i className="ri-calendar-line absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"></i>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <textarea
                    rows="4"
                    placeholder="Send Message"
                    className="w-full px-3 py-3 bg-[#121212] text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 text-lg rounded-full bg-red-600 text-white hover:bg-red-700 transition cursor-pointer font-semibold bricolage-font"
              >
                Rent Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-[#1a1a1a] border border-green-600/40 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
            <div className="flex justify-center mb-4">
              <i className="fa-solid fa-circle-check text-green-500 text-5xl"></i>
            </div>
            <h2 className="text-xl font-bold text-green-500 bricolage-font">
              Booking Successful!
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Thank you for choosing us. We’ll contact you shortly with
              confirmation details.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetails;
