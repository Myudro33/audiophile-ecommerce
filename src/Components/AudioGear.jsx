import React from "react";
import phDesktop from "../assets/home/desktop/image-best-gear.jpg";
import phTablet from "../assets/home/tablet/image-best-gear.jpg";
import phMobile from "../assets/home/mobile/image-best-gear (1).jpg";

const AudioGear = () => {
  return (
    <div
      className="dp:h-[37rem] m-auto md:h-[38rem] xs:h-[43.1rem] xs:w-[90%] dp:w-[80%]
    flex dp:flex-row xs:flex-col dp:justify-between  my-28
    "
    >
      <div className="overflow-hidden rounded-lg">
        <img className="xs:hidden dp:flex rounded-lg" src={phDesktop} alt="" />
        <img
          className="scale-[1.7] overflow-hidden md:flex  rounded-lg xs:hidden dp:hidden"
          src={phTablet}
          alt=""
        />
        <img src={phMobile} className='md:hidden rounded-lg  xs:flex' alt="" />
      </div>
      <div className="dp:w-2/5 xs:w-full xs:h-1/2 dp:h-full flex flex-col dp:items-start md:items-center   justify-center p-2">
        <h1 className="md:text-5xl xs:mt-4 md:mt-0 xs:text-3xl font-semibold xs:text-center">
          BRINGING YOU THE <span className="text-[#d87d4a] m-1">BEST</span>AUDIO
          GEAR
        </h1>
        <p className="text-center dp:w-full md:w-[90%] mt-8 text-[#00000080]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioGear;
