import React from "react";
import { getImgUrl } from "../../utils/getImageURL";
import Rating from "../../components/Rating";

const ProductCards = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA] text-center">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="Product" />
        <div className="dark:bg-black shadow-sm p-6">
          <h4 className="text-base mb-1">{product.category}</h4>
          <h3 className="font-semibold text-xl mb-2">{product.name}</h3>

          <Rating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
