import React from 'react';
import SectionLogo from './SectionLogo';
import SectionTitle from './SectionTitle';
import { categoriesData } from "../data";
function CategoriesSection() {
  return (
    <div className='container px-3 py-5 mx-auto lg:px-7'>
      <SectionLogo title='Categories' />
      <SectionTitle title='Browse By Category' />
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 my-6'>
        {
          categoriesData.map((category) => {
            return (
              <div key={category.id} className='category-card border border-solid border-[#0000004D] p-3 cursor-pointer rounded-sm flex flex-col justify-center items-center hover:bg-[#DB4444] hover:border-none'>
                <img src={category.image} alt={category.name} />
                <h2>{category.name}</h2>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default CategoriesSection;