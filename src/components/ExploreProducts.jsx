import React, { useEffect, useState } from 'react';
import SectionLogo from './SectionLogo';
import SectionTitle from './SectionTitle';
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import SwiperProducts from './SwiperProducts';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function ExploreProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='container px-3 py-7 mx-auto lg:px-7 my-5'>
      <SectionLogo title="Our Products" />
      <div className="title flex items-center justify-between mb-5">
        <SectionTitle title="Explore Our Products" />

        <div className="flex">
          <img src={leftArrow}
            className="custom-prev text-xl px-3 py-2 cursor-pointer"
          />
          <img src={rightArrow}
            className="custom-next text-xl px-3 py-2 cursor-pointer"
          />
        </div>
      </div>
      <SwiperProducts products={products} />
      {/* Button to toggle view */}
      <div className="flex items-center justify-center mt-" onClick={() => {
        navigate("/all-products");
      }}>
        <Button px="4" py="3" title="View All Products" />
      </div>
    </div>
  );
}

export default ExploreProducts;
