import React from "react";
import speaker from "../assets/image-category-thumbnail-speakers.png";
import circles from "../assets/circles.png";
import speakerTablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import speakerMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import earDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import earTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import earMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

const HomeAds = () => {
  return (
    <div className="dp:w-[80%] xs:w-[90%] h-[95rem]  flex flex-col items-center justify-between my-16">
      <div className="w-full xs:h-[38rem] md:h-[44rem] rounded-lg bg-[#d87d4a] flex dp:items-end dp:flex-row xs:flex-col xs:items-center relative overflow-hidden">
        <img
          src={speaker}
          className="z-20  dp:scale-[1.8] md:translate-y-0 xs:translate-y-9 dp:translate-x-20 dp:translate-y-28"
          alt="speaker"
        />
        <img
          className="absolute z-10  dp:scale-150 md:translate-y-0 xs:translate-y-32   dp:translate-y-80"
          src={circles}
          alt="circles"
        />
        <div className="dp:w-2/4 dp:h-1/2 dp:translate-x-44 mb-28 z-20 dp:text-start xs:text-center flex flex-col xs:items-center dp:items-start">
          <h1 className="md:text-6xl xs:text-3xl text-white font-semibold">
            ZX9 SPEAKER
          </h1>
          <p className="mt-10 text-[#ffffffbf] md:w-1/2 xs:w-[90%] dp:w-2/3">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/product/6">
            <button className="h-12 w-44 mt-10 bg-black hover:bg-[#2a2929] text-white">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="h-80 w-full rounded-lg flex justify-center items-center bg-[#f1f1f1] overflow-hidden relative">
        <img
          className="hidden md:flex w-full scale-110 translate-y-4"
          src={speakerTablet}
          alt=""
        />
        <img
          className="md:hidden w-full scale-110 translate-y-4"
          src={speakerMobile}
          alt=""
        />
        <div className="absolute h-1/2 w-[90%]">
          <h1 className="text-4xl font-semibold">ZX7 SPEAKER</h1>
          <Link to="/product/5">
            <button className="h-12 w-40 mt-8 border border-black font-semibold hover:bg-black hover:text-white ">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="md:h-80 xs:h-[30rem] w-full rounded-lg flex xs:flex-col md:flex-row xs:items-center md:items-start md:justify-between xs:justify-between xs:flex-wrap md:flex-nowrap">
        <img
          className="md:h-full rounded-lg xs:h-[48%] md:w-[48%] xs:w-full xs:hidden dp:flex"
          src={earDesktop}
          alt=""
        />
        <img
          className="md:h-full rounded-lg xs:h-[48%] md:w-[48%] xs:w-full xs:hidden md:flex dp:hidden"
          src={earTablet}
          alt=""
        />
        <img
          className="md:h-full rounded-lg xs:h-[48%] md:w-[48%] xs:w-full md:hidden xs:flex"
          src={earMobile}
          alt=""
        />
        <div className="md:h-full bg-[#f1f1f1] rounded-lg xs:h-[48%] md:w-[48%] xs:w-full xs:py-10 xs:px-10 md:py-20 dp:p-24 flex flex-col ">
          <h1 className="md:text-4xl xs:text-2xl font-semibold">
            YX1 EARPHONES
          </h1>
          <Link to={"/product/1"}>
            <button className="h-12 w-40 mt-8 border border-black font-semibold hover:bg-black hover:text-white ">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAds;
