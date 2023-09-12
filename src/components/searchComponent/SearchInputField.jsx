import React, { useState } from "react";
import SearchResult from "./SearchResult";
import SearchButton from "./SearchButton";
import SemiTransparentOverlay from "./SemiTransparentOverlay ";

const SearchInputField = ({
  columns,
  flex,
  labelStyle,
  paddingStyle,
  IconSearchVisibility,
  borderVisibility,
}) => {
  const [isInputFocused, setInputFocused] = useState(null);
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);

  const handleInputFocus = (index) => {
    setInputFocused(index);
  };

  const handleInputBlur = () => {
    setInputFocused(null);
  };

  const toggleSearchResult = () => {
    setSearchResultVisible(!searchResultVisible);
    setBodyOverflowHidden(!bodyOverflowHidden);
  };

  const closeSearchResult = () => {
    setSearchResultVisible(false);
    setBodyOverflowHidden(!bodyOverflowHidden);
  };

  console.log(borderVisibility);

  return (
    <div
      className={`flex ${flex} ${paddingStyle} w-full lg:w-auto justify-evenly sm:justify-around`}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className={`flex flex-col pr-0 ${
            isInputFocused === index
              ? borderVisibility === "active"
                ? "lg:border-solid lg:border-2 lg:border-black"
                : ""
              : ""
          } py-[0.5rem] rounded-[1rem] w-[9rem] ${
            borderVisibility === "active" && `lg:w-[24rem]`
          } lg:px-[1rem]`}
        >
          <label htmlFor={column.id} className={labelStyle}>
            {column.label}
          </label>
          <input
            type={column.type || "text"}
            id={column.id}
            placeholder={column.placeholder || ""}
            className={`${
              borderVisibility === "active" && `lg:w-[22rem]`
            } focus:outline-none`}
            onFocus={() => handleInputFocus(index)}
            onBlur={handleInputBlur}
          />
        </div>
      ))}
      {IconSearchVisibility === "hide" ? (
        ""
      ) : (
        <SearchButton onClick={toggleSearchResult} />
      )}
      {searchResultVisible && (
        <>
          <SemiTransparentOverlay onClose={closeSearchResult} />{" "}
          <SearchResult onClose={closeSearchResult} />
        </>
      )}
    </div>
  );
};

export default SearchInputField;
