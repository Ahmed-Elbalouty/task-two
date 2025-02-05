import React from 'react';
import imageOne from "../assets/services-one.png";
import imageTwo from "../assets/services-two.png";
import imageThree from "../assets/services-three.png";

function Services() {
  return (
    <div className='container px-3 py-10 mx-auto lg:px-7 my-10'>
      <div className="flex flex-col sm:flex-row  sm:flex-col-3 gap-5 justify-evenly ">
        <div className="flex flex-col items-center text-center gap-2">
          <img src={imageOne} alt="Service Image" className='w-[80px]' />
          <h3 className='text-[20px] font-[600]'>FREE AND FAST DELIVERY</h3>
          <p className='text-[14px]'>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <img src={imageTwo} alt="Service Image" className='w-[80px]' />
          <h3 className='text-[20px] font-[600]'>24/7 CUSTOMER SERVICE</h3>
          <p className='text-[14px]'>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <img src={imageThree} alt="Service Image" className='w-[80px]' />
          <h3 className='text-[20px] font-[600]'>MONEY BACK GUARANTEE</h3>
          <p className='text-[14px]'>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
