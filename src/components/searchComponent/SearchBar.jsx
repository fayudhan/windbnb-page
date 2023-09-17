import SearchInputFieldDisabled from "./SearchInputFieldDisabled";

const SearchBar = ({ updateSearchQuery }) => {
  const handleSearch = (query) => {
    updateSearchQuery(query);
  };

  return (
    <div className="md:px-4 lg:px-0 py-5 text-sm">
      <div className="bg-white p-0 rounded-lg flex justify-between esm:justify-center items-center">
        <SearchInputFieldDisabled updateSearchQuery={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
