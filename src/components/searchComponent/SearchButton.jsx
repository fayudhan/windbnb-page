import React from "react";
import { search } from "../../assets";

const SearchButton = ({ onClick }) => {
  return (
    <button className="rounded-md focus:outline-none" onClick={onClick}>
      <img src={search} alt={search} className="w-6" />
    </button>
  );
};

export default SearchButton;
