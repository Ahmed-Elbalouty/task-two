import React, { useEffect, useState } from "react";
import Product from "./Product";
import SectionLogo from "./SectionLogo";
import SectionTitle from "./SectionTitle";
import { useRecoilState } from "recoil";
import { productsAtom } from "../atoms/productsAtom";

function AllProducts() {
  const [products, setProducts] = useRecoilState(productsAtom);


  return (
    <div className="container px-3 py-5 mx-auto lg:px-7">
      {/* section logo section */}
      <h1 className="text-center py-5 text-3xl font-bold">All Products</h1>
      {/* Products section */}
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Render each product */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
