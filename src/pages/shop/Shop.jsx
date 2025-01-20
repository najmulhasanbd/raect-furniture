import React from "react";
import banner from "../../assets/banner.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center flex justify-center items-center"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
        }}
      ><h1 className="text-4xl font-bold text-center">Shop Our Products</h1></div>
      <Products title="What's Your Choise US" />
    </section>
  );
};

export default Shop;
