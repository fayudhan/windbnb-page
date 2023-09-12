import React from "react";
import { close, searchW } from "../../assets";
import SearchInputField from "./SearchInputField";

const SearchResult = ({ onClose }) => {
  const columns = [
    {
      label: "location",
      id: "city",
      placeholder: "Enter city name",
    },
    {
      label: "guest",
      id: "guests",
      type: "number",
      placeholder: "Add Guest",
    },
  ];

  return (
    <div className="fixed z-50 h-full lg:h-[10.75rem] lg:h-[1/2] w-full top-0 left-0 p-4 bg-white lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-[2.81rem] lg:py-[8rem] xl:pr-[6.06rem]">
      <div className="flex flex-row justify-between items-center pb-[1rem] lg:hidden">
        <p className="text-gray-700 font-mulish text-xs font-semibold ">
          Edit your search
        </p>
        <button onClick={onClose}>
          <img src={close} alt={close} className="w-[0.875rem]" />
        </button>
      </div>
      <SearchInputField
        columns={columns}
        flex="flex-col lg:flex-row"
        labelStyle="text-gray-700 font-mulish text-[0.5625rem] font-extrabold uppercase"
        paddingStyle="py-[0.75rem]"
        mb6="mb-6 lg:mb-0"
        IconSearchVisibility="hide"
        borderVisibility="active"
      />
      <div className="flex justify-center mt-[11.35rem] lg:mt-0">
        <button className="flex mb-[0.875rem] lg:mb-[0] rounded-[1rem] bg-red-500 bg-opacity-90 hover:opacity-80 shadow-md px-[1.69rem] py-[1rem] text-gray-200 font-mulish text-base font-normal">
          <img src={searchW} alt={searchW} className="pr-[0.5rem]" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
