import React from "react";
import { star } from "../assets";
import ImageWithOverlay from "./ImageWithOverlay ";

const PropertyCard = ({ id, data, onClick }) => {
  const superhostTag = data.superHost ? (
    <div className="text-gray-700 font-montserrat text-xsAlt font-semibold uppercase rounded-full border border-gray-700 py-1.5 px-3">
      Superhost
    </div>
  ) : null;

  return (
    <div className="bg-white rounded-lg">
      {/* Images */}

      <ImageWithOverlay
        mainImage={data.photo}
        id={id}
        handleCardClick={onClick}
      />

      {/* Content */}
      <div className="flex flex-row justify-between items-center pt-2.5 pb-1">
        {/* Text 1 */}
        {superhostTag}

        {/* Text 2 */}
        <div className="text-gray-500 font-montserrat text-sm font-medium mb-2">
          {data.type}
        </div>

        {/* Icon + Text 3 */}
        <div className="flex items-center space-x-1 text-gray-700 font-montserrat text-sm font-medium mb-2">
          <img src={star} alt={star} />

          <div>{data.rating}</div>
        </div>
      </div>
      {/* Title */}
      <a
        href="#"
        className="text-gray-900 text-left font-montserrat text-sm font-semibold"
      >
        {data.title}
      </a>
    </div>
  );
};

export default PropertyCard;
