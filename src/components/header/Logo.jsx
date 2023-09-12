import { logo } from "../../assets";

const Logo = () => {
  return (
    <div className="px-4 py-5">
      <img src={logo} alt={logo} className="w-20" />
    </div>
  );
};

export default Logo;
