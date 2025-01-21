/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { products } from "../../utils/products";
import ProductCards from "./ProductCards";

const Products = ({ title }) => {
  const categories = ["All", "Chair", "Beds", "Sofa", "Lamp"]; // Add "All" to show all products initially
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"
  const [visibleCount, setVisibleCount] = useState(8); // Number of products initially visible
  const [loading, setLoading] = useState(false); // State for loading spinner

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products // Show all products if "All" is selected
      : products.filter((product) => product.category === selectedCategory);

  // Handle "Load More" functionality
  const handleLoadMore = () => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4); // Load 4 more products
      setLoading(false); // Hide spinner
    }, 1000); // Simulate a 1-second delay for loading
  };

  return (
    <div>
      <div className="section-container">
        <h1 className="text-center text-4xl font-bold my-8">{title}</h1>
        <div className="bg-[#EEEEEE] max-w-lg mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category); // Update selected category
                  setVisibleCount(8); // Reset visible count when changing category
                }}
                className={`py-1.5 sm:py-3 px-8 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white" // Active button styles
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <ProductCards key={index} product={product} />
          ))}
        </div>
        {visibleCount < filteredProducts.length && ( // Show "Load More" button only if there are more products to load
          <div className="text-center mt-8">
            {loading ? ( // Show spinner if loading is true
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <button
                onClick={handleLoadMore}
                className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Load More
              </button>
            )}
          </div>
        )}
        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full mt-8">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
