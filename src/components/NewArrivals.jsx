import React from 'react';
import SectionLogo from './SectionLogo';
import SectionTitle from './SectionTitle';
import imgOne from "../assets/arrival-one.png";
import imgTwo from "../assets/arrival-two.png";
import imgThree from "../assets/arrival-three.png";
import imgFour from "../assets/arrival-four.png";

function NewArrivals() {
  return (
    <div className="container px-3 pt-10 mx-auto lg:px-7">
      <SectionLogo title="Featured" />
      <SectionTitle title="New Arrival" />

      {/* Main Flex Container to Ensure Equal Height */}
      <div className="my-5 flex flex-col md:flex-row gap-3 justify-center items-stretch">
        
        {/* Left Side (Matches Right Side Height) */}
        <div className="left-side w-full md:w-1/2 flex">
          <div className="relative w-full h-full aspect-[570/600] md:aspect-auto overflow-hidden rounded-lg">
            <img src={imgOne} alt="Arrival Image" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Side (Three Images) */}
        <div className="right-side flex flex-col gap-3 w-full md:w-1/2">
          
          {/* Top Image */}
          <div className="relative flex-1 aspect-[4/2] overflow-hidden rounded-lg">
            <img src={imgTwo} alt="Arrival Image" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Bottom Two Images*/}
          <div className="bottom flex gap-3 flex-1">
            <div className="relative w-1/2 aspect-square overflow-hidden rounded-lg">
              <img src={imgThree} alt="Arrival Image" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-1/2 aspect-square overflow-hidden rounded-lg">
              <img src={imgFour} alt="Arrival Image" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
