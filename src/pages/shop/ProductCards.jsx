/* eslint-disable react/prop-types */
import React from "react";
import { getImgUrl } from "../../utils/getImageURL";
import Rating from "../../components/Rating";

const ProductCards = ({ product }) => {

  // eslint-disable-next-line no-unused-vars
  const totalStars = 5;

  return (
    <div>
      <div className="bg-[#FAFAFA] text-center">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="Product" />
      </div>
      <div className="dark:bg-black shadow-sm p-6">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

        <Rating className="flex" rating={product.rating} />

        <div className="mt-2">
          <p className="text-secondary dark:text-white font-bold text-lg"><sup>$</sup><span>{product.price}</span></p>
        </div>
        </div>
    </div>
  );
};

export default ProductCards;
