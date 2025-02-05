import React from 'react';
import send from "../assets/icon-send.png";
import QR from "../assets/QR.png";
import google from "../assets/google.png";
import social from "../assets/social.png";
function Footer() {
  return (
    <div className='bg-black'>
      <div className='container px-3 py-10 mx-auto lg:px-10 mt-10 text-white'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 gap-x-5">
          <div className="flex flex-col gap-2">
            <h3 className='text-[24px] font-[700]'>Exclusive</h3>
            <a href="#" className='text-[20px] font-[500]'>Subscribe</a>
            <a href="#">Get 10% off your first order</a>
            <div className="relative flex items-center border-2 border-white border-solid rounded-md py-1 px-2 mr-5 mt-1 w-fit">
              <input type="text" placeholder='Enter Your Email' className='border-none outline-none px-0' />
              <img src={send} alt="Send Icon" className='w-[18px] h-[18px] absolute right-[5px]' />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-[20px] font-[500] mb-2'>Support</h3>
            <ul className='text-[16px] font-[400]'>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-[20px] font-[500] mb-2'>Account</h3>
            <ul className='text-[16px] font-[400]'>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-[20px] font-[500] mb-2'>Support</h3>
            <ul className='text-[16px] font-[400]'>
              <li>Quick Link</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className='text-[20px] font-[500] mb-2'>Download App</h3>
            <address className='text-[12px] font-[500]'>Save $3 with App New User Only</address>
            <div className="flex gap-3 my-3">
              <img src={QR} alt="QR Code" className='w-[50px] h-[50px]' />
              <img src={google} alt="Google Play Icon" className='w-[70px] h-[50px]' />
            </div>
            <div className="social">
              <img src={social} alt="Social Media Icon" className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
