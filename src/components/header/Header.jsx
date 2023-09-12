import Logo from "./Logo";
import SearchBar from "../searchComponent/SearchBar";

const Header = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center bg-white p-4 fixed w-full top-0 z-40">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Header;
