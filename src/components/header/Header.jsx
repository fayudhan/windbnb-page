import Logo from "./Logo";
import SearchBar from "../searchComponent/SearchBar";

const Header = ({ updateSearchQuery }) => {
  const handleSearch = (query) => {
    updateSearchQuery(query);
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-4 lg:px-0 fixed inset-x-0 top-0 w-full z-40">
      <Logo />
      <SearchBar updateSearchQuery={handleSearch} />
    </div>
  );
};

export default Header;
