"use client";

import Image from "next/image";
import React from "react";
import ServicesSwiper from "../../components/serviceswiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Ensure you import the necessary styles for navigation

const Service = () => {
  return (
    <div id="section" className="!h-max px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600 font-semibold text-lg flex items-center justify-center">
          <span className="w-16 border-t border-purple-600"></span>{" "}
          <span className="mx-4 font-sans font-medium">Our Services</span>
          <span className="w-16 border-t border-purple-600"></span>
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Exceptional Services For{" "}
          <span className="text-blue-600">Your Business Growth</span>
        </h2>
      </div>
      <div className="w-[90%] mx-auto">
        <ServicesSwiper />
      </div>
    </div>
  );
};

export default Service;
