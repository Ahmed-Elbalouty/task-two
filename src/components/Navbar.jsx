import React, { useState, useRef, useEffect } from 'react';
import search from "../assets/search.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
import useWindowWidth from '../hooks/useWindowWidth';
import Drawer from './Drawer';
import { AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null); // Reference for Drawer component

  const toggleDrawer = () => setIsOpen(!isOpen);
  const width = useWindowWidth();

  // Close the drawer when clicking outside of it or on the icon
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the drawer if clicked outside
      if (drawerRef.current && !drawerRef.current.contains(event.target) && !event.target.closest('.menu')) {
        setIsOpen(false);
      }
    };

    // Add the event listener when the drawer is open
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='relative'>
      <div className="container px-3 py-5 mx-auto lg:px-7">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl font-bold cursor-pointer">
            Exclusive
          </h1>
          {
            width > 768 ?
              <>
                <div className="links">
                  <ul className='flex gap-5 font-semibold'>
                    <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Home</a></li>
                    <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Contact</a></li>
                    <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>About</a></li>
                    <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Sign Up</a></li>
                  </ul>
                </div>
                <div className="flex items-center gap-3">
                  <div className="search bg-[#F5F5F5] rounded-md py-2 px-3 flex items-center justify-between gap-4">
                    <input type="text" placeholder='What are you looking for?' className='text-[15px] border-none outline-none' />
                    <img src={search} alt="Search Icon" className='w-[15px] h-[15px]' />
                  </div>
                  <a href="#">
                    <img src={heart} alt="Heart Icon" />
                  </a>
                  <a href="#">
                    <img src={cart} alt="Cart Icon" />
                  </a>
                </div>
              </>
              :
              <div className="flex flex-col gap-2 cursor-pointer menu" onClick={toggleDrawer}>
                <span className='w-[30px] h-[2px] bg-black'></span>
                <span className='w-[30px] h-[2px] bg-black'></span>
                <span className='w-[30px] h-[2px] bg-black'></span>
              </div>
          }
        </div>

        <AnimatePresence>
          {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
        </AnimatePresence>

      </div>
      <hr className='w-full h-[2px]' />
    </div>
  );
}

export default Navbar;
