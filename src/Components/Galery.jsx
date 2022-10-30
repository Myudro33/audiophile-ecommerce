import React from "react";

const Galery = ({ images }) => {
  const imageApi =
    "https://chkhikvadzeg.github.io/audiophile-ecommerce-website";
  console.log(images);
  return (
    <div className="my-20 dp:w-4/5 xs:w-[90%] dp:h-[38rem] md:h-[25rem] xs:h-[50rem] flex md:flex-row md:justify-between xs:justify-between xs:flex-col">
        <div className="md:h-full xs:h-[45%]  md:w-[40%] flex flex-col justify-between xs:w-full">
            <img className="w-full h-[48%] rounded-lg" src={`${imageApi}${images.first.desktop}`} alt="" />
            <img className="w-full h-[48%] rounded-lg" src={`${imageApi}${images.second.desktop}`} alt="" />
        </div>
        <div className="md:w-[57%] xs:w-full md:h-full xs:h-[52%]">
            <img className="w-full h-full rounded-lg"  src={`${imageApi}${images.third.desktop}`} alt="" />
        </div>
    </div>
  );
};

export default Galery;
