import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import Product from "./Product";
import Button from "./Button";
import SectionLogo from "./SectionLogo";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import SwiperProducts from "./SwiperProducts";
import { useRecoilState } from "recoil";
import { productsAtom } from "../atoms/productsAtom";

function FlashSalesSection() {
  const [products, setProducts] = useRecoilState(productsAtom);
  const [timer, setTimer] = useState({ days: "03", hours: "23", minutes: "19", seconds: "56" });

  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  useEffect(() => {
    // Set a future target date (e.g., 3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now; // Time left in milliseconds

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimer({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container px-3 py-7 mx-auto lg:px-7 my-5">
      {/* section logo section */}
      <SectionLogo title="Today's" />
      <div className="title flex items-center justify-between mb-5">
        <SectionTitle title="Flash Sales" />

        {/* Timer */}
        <div className="timer flex gap-4 items-center text-center">
          {Object.entries(timer).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-[14px] capitalize">{key}</span>
              <h2 className="text-2xl font-bold">{value}</h2>
            </div>
          )).reduce((prev, curr, index) => index ? [...prev, <div key={index} className="colon text-[#DB4444] font-bold text-2xl">:</div>, curr] : [curr], [])}
        </div>

        <div className="flex">
          <img src={leftArrow} className="custom-prev text-xl px-3 py-2 cursor-pointer" />
          <img src={rightArrow} className="custom-next text-xl px-3 py-2 cursor-pointer" />
        </div>
      </div>

      {/* Products section */}
      <SwiperProducts products={products} />

      {/* Button to toggle view */}
      <div className="flex items-center justify-center mt-" onClick={() => navigate("/all-products")}>
        <Button px="4" py="3" title="View All Products" />
      </div>
      <hr className="mt-8" />
    </div>
  );
}

export default FlashSalesSection;
