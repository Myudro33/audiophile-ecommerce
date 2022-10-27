import React from "react";
import headphone from "../assets/home/desktop/image-hero.jpg";
import tabletHeadphone from "../assets/home/tablet/image-header.jpg";
import mobileHeadphones from "../assets//home/mobile/image-header.jpg";
const Heading = () => {
  return (
    <div className="w-full md:h-[38.6rem] bg-[#191919] flex xs:justify-center md:justify-center">
      <div className="dp:w-3/4 h-full flex items-center xs:justify-center dp:justify-start">
        <div className="absolute z-10 dp:h-1/2 dp:left-72 flex flex-col xs:items-center  dp:items-start">
          <h2 className="text-base tracking-[0.5em] text-[#ffffff80]">
            NEW PRODUCT
          </h2>
          <h1 className="md:text-6xl xs:text-4xl font-bold text-white mt-5 ">XX99 MARK II</h1>
          <h1 className="md:text-6xl xs:text-4xl font-bold text-white ">HEADPHONES</h1>
          <p className="md:w-[26rem] xs:w-64 dp:w-[27rem] text-[#ffffffbf]  xs:text-center dp:text-start mt-5 font-semibold">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="h-12 w-40 mt-8 bg-[#d87d4a] text-white font-semibold hover:bg-[#da946c]">
            SEE PRODUCT
          </button>
        </div>
        <img
          className="md:hidden dp:flex xs:hidden"
          src={headphone}
          alt="headphone"
        />
        <img
          className="dp:hidden w-[28rem] md:block xs:hidden"
          src={tabletHeadphone}
          alt="headphone"
        />
        <img className="md:hidden w-[18rem] h-[32rem]" src={mobileHeadphones} alt="headphones" />
      </div>
    </div>
  );
};

export default Heading;
