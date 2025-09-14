import React, { useState } from 'react'
import { cardata } from '../assets/Cars'
import { Link } from 'react-router-dom';


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
      <div className="flex flex-col-reverse md:flex-row gap-8 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        <div className="w-full sticky top-0 md:w-[300px] bg-[#1e1f22] rounded-2xl p-6 shadow-lg animate-side-left h-full">
          <div className="mb-6">
            <input type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full px-4 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 outline-none'
            placeholder='Search cars....' />
          </div>

          <div className="mb-6">
            <h4 className='font-semibold text-white bricolage-font text-2xl mb-3'>
              Categories
            </h4>
            <ul className="text-md space-y-2 text-gray-400">
              {categories.map((cat)=>(
                <li className="flex items-center gap-2" key={cat}>
                  <input type="checkbox" 
                  onChange={() =>  handleCheckBoxChange(cat, selectedCategories, setSelectedCategories)}
                  checked={selectedCategories.includes(cat)} />
                  <span className='hover:text-white transition-colors duration-300'>{cat}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className='font-semibold text-white bricolage-font text-2xl mb-3'>
              Pickup Location
            </h4>
            <ul className="text-md space-y-2 text-gray-400">
              {pickupLocations.map((loc)=>(
                <li className="flex items-center gap-2" key={loc}>
                  <input type="checkbox" 
                  onChange={() =>  handleCheckBoxChange(loc, selectedPickUp, setSelectedPickUp)}
                  checked={selectedPickUp.includes(loc)} />
                  <span className='hover:text-white transition-colors duration-300'>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className='font-semibold text-white bricolage-font text-2xl mb-3'>
              Dropoff Location
            </h4>
            <ul className="text-md space-y-2 text-gray-400">
              {dropoffLocations.map((loc)=>(
                <li className="flex items-center gap-2" key={loc}>
                  <input type="checkbox" 
                  onChange={() =>  handleCheckBoxChange(loc, selectedDropoff, setSelectedDropoff)}
                  checked={selectedDropoff.includes(loc)} />
                  <span className='hover:text-white transition-colors duration-300'>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex-1 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
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
              ))
            ): (
              <p className="text-white text-xl">No Cars Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cars
