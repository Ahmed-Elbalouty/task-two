import React, { useState } from 'react';
import DropDown from "../assets/DropDown.png";
import imageOne from "../assets/imageOne.png";

function HeroSection() {
  // State to track the visibility of the first two dropdowns
  const [dropdownVisibility, setDropdownVisibility] = useState({
    womanFashion: false,
    electronics: false,
  });

  // Function to toggle the dropdown visibility for each category
  const toggleDropdown = (category) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [category]: !prevState[category], // Toggle the specific category
    }));
  };

  return (
    <div className='container px-3 py-7 mx-auto lg:px-7 mb-5'>
      <div className='md:grid md:grid-cols-[1fr_3fr] gap-5'>
        {/* aside section  */}
        <div className="aside pr-4 lg:pr-7 hidden md:block">
          <ul className="flex flex-col gap-3 font-semibold">
            <li className="flex items-center justify-between relative">
              <a href="#" className="text-black">Woman Fashion</a>
              <img
                src={DropDown}
                alt="DropDown Icon"
                className="cursor-pointer"
                onClick={() => toggleDropdown('womanFashion')} // Toggle dropdown visibility for Woman Fashion
              />
              {dropdownVisibility.womanFashion && (
                <ul className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-lg z-10 w-full">
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 1</a></li>
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 2</a></li>
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 3</a></li>
                </ul>
              )}
            </li>
            <li className="flex items-center justify-between relative">
              <a href="#" className="text-black">Electronics</a>
              <img
                src={DropDown}
                alt="DropDown Icon"
                className="cursor-pointer"
                onClick={() => toggleDropdown('electronics')} // Toggle dropdown visibility for Electronics
              />
              {dropdownVisibility.electronics && (
                <ul className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-lg z-10 w-full">
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 1</a></li>
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 2</a></li>
                  <li><a href="#" className="block p-2 hover:bg-gray-100">Item 3</a></li>
                </ul>
              )}
            </li>
            {/* The remaining items do not have dropdown */}
            <li><a href="#" className="text-black">Home & Lifestyle</a></li>
            <li><a href="#" className="text-black">Medicine</a></li>
            <li><a href="#" className="text-black">Sports & Outdoor</a></li>
            <li><a href="#" className="text-black">Babys & Toys</a></li>
            <li><a href="#" className="text-black">Groceries & Pets</a></li>
            <li><a href="#" className="text-black">Health & Beauty</a></li>
          </ul>
        </div>

        {/* Image section */}
        <div className="hero-image">
          <img src={imageOne} className='min-h-[270px] aspect-[2.5/1]' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
