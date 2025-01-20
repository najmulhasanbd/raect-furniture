import React from "react";
import banner from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-center w-full bg-no-repeat text-white"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="md:pt-48 px-4 pt-24 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-3xl  text-white lg:text-6xl font-medium leading-tight">
          Make your interior more minimalistic & modern
        </h1>
        <p>
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        <form action="" className="relative">
          <input
            type="text"
            className="border-2 mt-8 border-gray-300 px-4 py-3 w-full md:w-50 focus:outline-none rounded-full "
            placeholder="Enter your email address"
          />
          <div className="absolute top-1/2 right-0 transform -translate-x-1/2 bg-primary rounded-full p-2">
            <FaSearch />
          </div>
        </form>
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
      </div>

      <div className="absolute bottom-40 left-24 group">
        <button className="relative p-4 bg-white/25 rounded-full border border-1 bg-white text-xl">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex">
            <div className="size-6 bg-red-700 border border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border border-white rounded-full"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
