import React, { useState } from 'react'
import { cardata } from '../assets/Cars'


const Cars = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPickUp, setSelectedPickUp] = useState([]);
    const [selectedDropoff, setSelectedDropoff] = useState([]);

    const categories = [...new Set(cardata.map((car)=> car.type))];
    const pickupLocations = ["Abu Dhabi", "Alain", "Bangladesh","Dubai"];
    const dropoffLocations = ["Abu Dhabi", "Alain", "Bangladesh","Dubai"];

    const handleCheckBoxChange = (value,state,setState) => {
        if(state.includes(value)){
            setState(state.filter((item) => item !== value));
        }
        else {
            setState([...state, value]);
        }
    };

    const filteredCars = cardata.filter((car) => {
        const mathchesSearch = 
        car.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        car.type.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());

        const matchesCategories = 
        selectedCategories.length === 0 || selectedCategories.includes(car.type);

        const matchesPickup = 
        selectedPickUp.length === 0 || selectedPickUp.some((loc) => car.pickup === loc);

        const matchesDropoff = 
        selectedDropoff.length === 0 || selectedDropoff.some((loc) => car.dropoff === loc);

        return mathchesSearch && matchesCategories && matchesPickup && matchesDropoff;
    });



  return (
    <>
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
            <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
                - RENT NOW
            </h6>
            <h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-red-600'>
                 <span className='text-white bricolage-font'>Select</span> Luxury Car
            </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="w-full sticky top-0 md:w-[300px] bg-[#1e1f22] rounded-2xl p-6 shadow-lg animate-side-left h-full">
          <div className="mb-6">
            <input type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full px-4 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 outline-none'
            placeholder='Search cars....' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cars
