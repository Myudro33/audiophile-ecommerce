import React from "react";
import headphone from "../assets/image-category-thumbnail-headphones.png";
import speakers from "../assets/image-category-thumbnail-speakers.png";
import earphones from "../assets/image-category-thumbnail-earphones.png";
import arrow from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const ShopCategorys = () => {
  return (
    <div className="xs:w-[90%] dp:w-4/5 dp:h-52 md:h-44 xs:h-[47rem] flex xs:flex-col xs:justify-between md:flex-row md:justify-between xs:my-24 md:my-32">
      <div className="bg-[#f1f1f1] rounded-lg xs:w-full xs:h-[25%] md:h-full  dp:w-[30%] md:w-[32%] flex  flex-col items-center">
        <img className="md:w-36 md:h-32 xs:w-28 xs:-translate-y-10 md:-translate-y-14" src={headphone} alt="img" />
        <h1 className="md:-translate-y-5 dp:-translate-y-0">Headphones</h1>
        <Link to={"/headphones"}>
          <span className="flex xs:mt-3 md:mt-0 items-center md:-translate-y-4 dp:-translate-y-0  dp:mt-2">
            <img className="h-3 mr-2" src={arrow} alt="arrow" />
            <p>SHOP</p>
          </span>
        </Link>
      </div>
      <div className="bg-[#f1f1f1] rounded-lg xs:w-full xs:h-[25%] md:h-full dp:w-[30%] md:w-[32%] flex  flex-col items-center">
        <img className="md:w-36 md:h-32 xs:w-28 xs:-translate-y-10 md:-translate-y-14" src={speakers} alt="img" />
        <h1 className="md:-translate-y-5 dp:-translate-y-0">Speakers</h1>
        <Link to={"/speakers"}>
          <span className="flex xs:mt-3 md:mt-0 items-center  md:-translate-y-4 dp:-translate-y-0  dp:mt-2">
            <img className="h-3 mr-2" src={arrow} alt="arrow" />
            <p>SHOP</p>
          </span>
        </Link>
      </div>
      <div className="bg-[#f1f1f1] rounded-lg xs:w-full xs:h-[25%] md:h-full dp:w-[30%] md:w-[32%] flex  flex-col items-center">
        <img className="md:w-36 md:h-32 xs:w-28 xs:-translate-y-10 md:-translate-y-14" src={earphones} alt="img" />
        <h1 className="md:-translate-y-5 dp:-translate-y-0">Earphones</h1>
        <Link to={"/earphones"}>
          <span className="flex xs:mt-3 md:mt-0 items-center  md:-translate-y-4 dp:-translate-y-0  dp:mt-2">
            <img className="h-3 mr-2" src={arrow} alt="arrow" />
            <p>SHOP</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ShopCategorys;
