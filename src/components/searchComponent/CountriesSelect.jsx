import React from "react";
import { location } from "../../assets";

const CountriesSelect = ({ handleButtonClick }) => {
  return (
    <div className="flex flex-col space-y-8 py-8 px-8 text-gray-700 ">
      <button
        data-value="Helsinki"
        className="flex items-center"
        onClick={handleButtonClick}
      >
        <img src={location} alt={location} className="mr-[0.63rem]" /> Helsinki,
        Finland
      </button>
      <button
        data-value="Turku"
        className="flex items-center"
        onClick={handleButtonClick}
      >
        <img src={location} alt={location} className="mr-[0.63rem]" /> Turku,
        Finland
      </button>
      <button
        data-value="Oulu"
        className="flex items-center"
        onClick={handleButtonClick}
      >
        <img src={location} alt={location} className="mr-[0.63rem]" /> Oulu,
        Finland
      </button>
      <button
        data-value="Vaasa"
        className="flex items-center"
        onClick={handleButtonClick}
      >
        <img src={location} alt={location} className="mr-[0.63rem]" /> Vaasa,
        Finland
      </button>
    </div>
  );
};

export default CountriesSelect;
