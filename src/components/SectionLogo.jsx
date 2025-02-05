import React from 'react';
import Rectangle from "../assets/Rectangle.png";

function SectionLogo({ title }) {
  return (
    <div className="today flex gap-3 items-center mb-3">
      <img src={Rectangle} alt="Rectangle" />
      <span className="text-[#DB4444] font-semibold">{title}</span>
    </div>
  );
}

export default SectionLogo;