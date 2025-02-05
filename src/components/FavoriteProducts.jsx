import React from "react";
import { useRecoilValue } from "recoil";
import Product from "./Product";
import { favoritesAtom } from "../atoms/favoritesAtom";

function FavoriteProducts() {
  const favoriteProducts = useRecoilValue(favoritesAtom);

  return (
    <div className="container px-3 py-5 mx-auto lg:px-7">
      <h1 className="text-center py-5 text-3xl font-bold">Favorite Products</h1>

      {favoriteProducts.length > 0 ? (
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl py-10">
          No products in favorites 😔
        </p>
      )}
    </div>
  );
}

export default FavoriteProducts;
