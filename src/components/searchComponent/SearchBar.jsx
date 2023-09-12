import React, { useState } from "react";
import SearchInputField from "./SearchInputField";

const SearchBar = () => {
  const columns = [
    {
      label: "",
      id: "city",
      placeholder: "Enter city name",
    },
    {
      label: "",
      id: "guests",
      type: "number",
      placeholder: "Add Guest",
      width: "w-20",
    },
  ];

  return (
    <div className={`px-4 py-5 text-sm `}>
      <div className="bg-white p-0 rounded-lg flex justify-between items-center">
        <SearchInputField columns={columns} flex="flex-row" />
      </div>
    </div>
  );
};

export default SearchBar;
