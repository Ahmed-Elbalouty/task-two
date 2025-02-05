import React, { useEffect, useState } from 'react';
import SectionLogo from './SectionLogo';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import music from "../assets/music.png";
import { productsAtom } from '../atoms/productsAtom';
import { useRecoilState } from 'recoil';

function BestSelling() {
  const [products, setProducts] = useRecoilState(productsAtom);

  const navigate = useNavigate();
  return (
    <div className='container px-3 py-7 mx-auto lg:px-7 my-6'>
      <SectionLogo title="This Month" />
      <div className="flex justify-between items-center my-2">
        <SectionTitle title="Best Selling Products" />
        <div onClick={() => {
          navigate("/all-products");
        }}>
          <Button px="4" py="3" title="View All" />
        </div>
      </div>
      {/* show products */}
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render each product */}
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {/* music image */}
      <div className='my-5 py-10 mx-auto flex justify-center'>
        <img src={music} alt="Music Image" />
      </div>
    </div>
  );
}

export default BestSelling;
