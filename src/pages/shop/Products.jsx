/* eslint-disable react/prop-types */
import React from "react";
import { products } from "../../utils/products";
import ProductCards from "./ProductCards";

const Products = ({ title }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  return (
    <div>
      <div className="section-container">
        <h1 className="text-center text-4xl font-bold my-8">{title}</h1>
        <div className="bg-[#EEEEEE] max-w-lg mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-1.5 sm:py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {
                products.map((product, index)=>(
                    <ProductCards key={index} product={product}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
