import { useState } from "react";
import { search } from "../../assets";
import SearchInputField from "./SearchInputField";
import SemiTransparentOverlay from "./SemiTransparentOverlay ";

const SearchInputFieldDisabled = ({ updateSearchQuery }) => {
  const [searchResultVisibility, setSearchResultVisibility] = useState(false);

  const toggleResultVisibility = () => {
    setSearchResultVisibility(!searchResultVisibility);
  };

  const closeSearchResult = () => {
    setSearchResultVisibility(false);
  };

  const handleSearch = (query) => {
    updateSearchQuery(query);
  };

  return (
    <>
      <div className="flex w-[90%] justify-between lg:justify-end lg:space-x-8">
        <input
          type="text"
          id="text"
          placeholder="Helsinki, Finland"
          value="Helsinki, Finland"
          className="focus:outline-none esm:w-[7.6rem] sm:w-[14rem] lg:w-[7.2rem]"
          disabled
        />

        <input
          type="number"
          id="guests"
          placeholder="Add guests"
          className="focus:outline-none esm:w-[7.6rem]  sm:w-[14rem] lg:w-[7.2rem]"
          disabled
        />

        <button
          className="rounded-md focus:outline-none cursor-pointer"
          onClick={toggleResultVisibility}
        >
          <img
            src={search}
            alt={search}
            className="w-[1.6rem] lg:w-[3.62rem]"
            onClick={toggleResultVisibility}
          />
        </button>
      </div>

      {searchResultVisibility && (
        <>
          <SemiTransparentOverlay onClose={closeSearchResult} />
          <SearchInputField
            onClose={closeSearchResult}
            searchQuery={handleSearch}
          />
        </>
      )}
    </>
  );
};

export default SearchInputFieldDisabled;
