import React from "react";
import emptyStar from "../assets/emptyStar.png";
import half from "../assets/halfStar.png";
import fullstar from "../assets/star.png";
import heart from "../assets/heart.png";
import { useRecoilState } from "recoil";
import { favoritesAtom } from "../atoms/favoritesAtom";

function Product({ product }) {
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);

  // Check if the product is in favorites
  const isFavorite = favorites.some((item) => item.id === product.id);

  function handleFavorite() {
    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== product.id);
      setFavorites(updatedFavorites);
      console.log(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      console.log(updatedFavorites);
    }
  }


  // Function to render stars dynamically based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const remaining = rating - fullStars;
    const halfStar = remaining >= 0.25 && remaining < 0.75;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [
      ...Array(fullStars).fill("full"),
      ...(halfStar ? ["half"] : []),
      ...Array(emptyStars).fill("empty"),
    ];

    return stars.map((star, index) => {
      if (star === "full") {
        return <img src={fullstar} key={index} alt="Full Star" className="w-[15px] h-[15px]" />;
      } else if (star === "half") {
        return <img src={half} key={index} alt="Half Star" className="w-[15px] h-[15px]" />;
      } else {
        return <img src={emptyStar} key={index} alt="Empty Star" className="w-[15px] h-[15px]" />;
      }
    });
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card-custom my-3 relative">
        {/* Discount Badge */}
        <div className="absolute z-30 top-[5px] left-[5px] bg-[#DB4444] px-2 py-1 rounded-md text-white text-[14px]">
          - 40%
        </div>

        {/* Favorite Heart Button */}
        <div
          className={`absolute z-30 top-[5px] right-[5px] p-2 cursor-pointer hover:opacity-80 rounded-full transition ${isFavorite ? "bg-red-500" : null
            }`}
          onClick={handleFavorite}
        >
          <img src={heart} alt="Favorite" className="w-5 h-5" />
        </div>

        {/* Product Image */}
        <div className="img p-3 bg-[#F5F5F5] rounded-lg relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto aspect-[4/5] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="body p-3">
          <h3 className="py-2 text-lg font-semibold truncate" title={product.title}>
            {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
          </h3>
          <div className="sale flex gap-3 font-semibold pb-2">
            <p className="text-[#DB4444]">${product.price}</p>
            <del className="text-[#707070]">$1500.99</del>
          </div>
          <div className="stars flex gap-1">{renderStars(product.rating.rate)}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
