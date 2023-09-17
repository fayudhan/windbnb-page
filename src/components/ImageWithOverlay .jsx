import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { visibility } from "../assets";

const ImageWithOverlay = ({ id, mainImage, handleCardClick }) => {
  return (
    <div className="group relative">
      <LazyLoadImage
        src={mainImage}
        alt="Image"
        effect="blur"
        className="w-full h-auto rounded-[1.5rem] object-cover h-[full] w-full sm:h-[16.8125rem] sm:w-[22.625rem] md:w-full lg:h-[14rem] lg:w-[20rem] xl:w-[24.625rem]"
      />
      <div
        className="overlay rounded-[1.5rem] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer h-[full] w-full sm:h-[16.8125rem] sm:w-[22.625rem] md:w-full lg:h-[14rem] lg:w-[20rem] xl:w-[24.625rem]"
        onClick={() => handleCardClick(id)}
      >
        <img src={visibility} alt={visibility} className="w-[2.5rem]" />
      </div>
    </div>
  );
};

export default ImageWithOverlay;
