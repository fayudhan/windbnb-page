import React, { useState } from "react";
import { close, searchW } from "../../assets";
import PropTypes from "prop-types";
import CountriesSelect from "./CountriesSelect";
import GuestsSelect from "./GuestsSelect";

const SearchInputField = ({ onClose, searchQuery }) => {
  const [formData, setFormData] = useState({
    guests: 1,
    selectedCity: "",
  });

  const [isFocusedInput, setFocusedInput] = useState(false);

  const handleGuestsChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (!isNaN(newValue) && newValue > 0) {
      setFormData({ ...formData, guests: newValue });
    }
  };

  const handleButtonClick = (event) => {
    const dataValue = event.target.getAttribute("data-value");
    setFormData({ ...formData, selectedCity: dataValue });
  };

  const handleSearchClick = () => {
    onClose();
    if (typeof searchQuery === "function") {
      searchQuery(formData);
    }
  };

  const handleFocus = (inputType) => {
    setFocusedInput(inputType);
  };

  return (
    <div className="fixed z-50 overflow-y-scroll h-full lg:h-auto w-full top-0 left-0 p-4 bg-white lg:flex lg:flex-row lg:items-start lg:justify-between lg:py-[2.81rem] lg:pr-[4rem] lg:py-[4rem] xl:pr-[6.06rem]">
      <div className="flex flex-row justify-between items-center pb-[1rem] lg:hidden">
        <p className="text-gray-700 font-mulish text-xs font-semibold ">
          Edit your search
        </p>
        <button onClick={onClose}>
          <img src={close} alt={close} className="w-[0.875rem]" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-[90%] justify-between lg:justify-end lg:space-x-8 px-[1.62rem] py-[0.69rem] lg:py-0 space-y-6 lg:space-y-0">
        <div>
          <div className="flex flex-col lg:w-[20.625rem] group lg:px-[1.69rem] lg:py-[0.63rem] lg:rounded-[1rem] lg:border lg:border-[2px] lg:shadow-md p-2 transition duration-300 ease-in-out lg:hover:border-gray-500 xl:w-[26.625rem]">
            <label className="text-gray-700 font-muli text-[0.5625rem] font-semibold uppercase">
              location
            </label>
            <input
              type="text"
              id="text"
              value={formData.selectedCity}
              readOnly
              placeholder="Helsinki, Finland"
              className="outline-none focus:outline-none esm:w-[7.6rem] lg:w-[16.62rem] xl:w-[24.625rem]"
              onFocus={() => handleFocus("city")}
            />
          </div>
          <div className="hidden lg:block">
            {isFocusedInput === "city" && (
              <CountriesSelect handleButtonClick={handleButtonClick} />
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:w-[20.625rem] group lg:px-[1.69rem] lg:py-[0.63rem] lg:rounded-[1rem] lg:border lg:border-[2px] lg:shadow-md p-2 transition duration-300 ease-in-out lg:hover:border-gray-500 xl:w-[26.625rem]">
            <label className="text-gray-700 font-muli text-[0.5625rem] font-semibold uppercase">
              guests
            </label>
            <input
              type="number"
              min="1"
              value={formData.guests}
              id="guests"
              placeholder="Add guests"
              className="outline-none focus:outline-none esm:w-[7.6rem] lg:w-[16.62rem] xl:w-[24.625rem]"
              onChange={handleGuestsChange}
              onFocus={() => handleFocus("guests")}
              disabled={
                isFocusedInput === "guests" && window.innerWidth >= 1024
              }
            />
          </div>
          <div className="hidden lg:block">
            {isFocusedInput === "guests" && (
              <GuestsSelect
                onGuestsChange={(guests) =>
                  setFormData({ ...formData, guests })
                }
              />
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <CountriesSelect handleButtonClick={handleButtonClick} />
      </div>

      <div className="flex justify-center mt-[11.35rem] lg:mt-0">
        <button
          className="flex mb-[0.875rem] lg:mb-[0] rounded-[1rem] bg-red-500 bg-opacity-90 hover:opacity-80 shadow-md px-[1.69rem] py-[1rem] text-gray-200 font-mulish text-base font-normal "
          onClick={handleSearchClick}
        >
          <img src={searchW} alt={searchW} className="pr-[0.5rem]" />
          Search
        </button>
      </div>
    </div>
  );
};

SearchInputField.propTypes = {
  onClose: PropTypes.func.isRequired,
  searchQuery: PropTypes.func.isRequired,
};

export default SearchInputField;
