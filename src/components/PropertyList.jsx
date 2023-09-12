import React from "react";
import PropertyCard from "./PropertyCard";
import hotelData from "./../data/stays.json";

const PropertyList = () => (
  <div className="max-w-7xl mx-auto px-4 py-5 md:py-14 mt-[10rem]">
    <div className="flex flex-row justify-between pb-6">
      <h1 className="text-sm md:text-2xl font-bold text-gray-900">
        Stays in Finland
      </h1>
      <p className="text-gray-700 font-montserrat text-sm font-medium">
        12+ Stays
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 gap-y-8 md:gap-x-6">
      {hotelData.map((item, index) => (
        <PropertyCard key={index} data={item} />
      ))}
    </div>
  </div>
);

export default PropertyList;
