import React from "react";
import { Link } from "react-router-dom";

const ProductAds = ({ filteredData, reverse }) => {
  const imageApi =
    "https://chkhikvadzeg.github.io/audiophile-ecommerce-website";
  return (
    <div className="dp:w-[80%] my-16 xs:w-[90%] xs:h-[45rem] dp:h-[35rem] flex xs:flex-col xs:justify-between dp:flex-row dp:justify-between">
      {reverse === false && (
        <>
          <div className="bg-[#f1f1f1] flex justify-center items-center rounded-lg dp:w-[48%] xs:w-full xs:h-[48%] dp:h-full">
            <img
              className="xs:w-full md:w-[45%] xs:h-full dp:w-[90%] dp:h-full rounded-lg"
              src={`${imageApi}${filteredData.image.desktop}`}
              alt="product"
            />
          </div>
          <div className="dp:w-[48%] xs:h-[50%] md:px-16 dp:px-0 dp:h-full dp:pl-16 flex flex-col xs:items-center dp:items-start dp:justify-center">
           {filteredData.new&&(
            <h1 className="text-[#d87d4a] tracking-[0.7em] xs:my-2 md:my-5">NEW PRODUCT</h1>
           )}
            <h1 className="uppercase xs:text-3xl xs:text-center dp:text-start md:text-[40px] font-semibold">
              {filteredData.name}
            </h1>
            <p className="my-10 xs:text-center dp:text-start text-[#00000080]">
              {filteredData.description}
            </p>
            <Link
              className="h-14 w-40 bg-[#d87d4a] hover:bg-[#db9268] flex justify-center items-center font-semibold text-white"
              to={`/product/${filteredData.id}`}
            >
              SEE PRODUCT
            </Link>
          </div>
        </>
      )}

      {reverse && (
        <>
          <div className="dp:w-[48%] xs:h-[50%] md:px-16 dp:px-0 dp:h-full dp:pl-16 xs:hidden dp:flex flex-col xs:items-center dp:items-start dp:justify-center">
          {filteredData.new&&(
            <h1 className="text-[#d87d4a] tracking-[0.7em] xs:my-2 md:my-5">NEW PRODUCT</h1>
           )}
            <h1 className="uppercase xs:text-3xl xs:text-center dp:text-start md:text-[40px] font-semibold">
              {filteredData.name}
            </h1>
            <p className="my-10 xs:text-center dp:text-start text-[#00000080]">
              {filteredData.description}
            </p>
            <Link
              className="h-14 w-40 bg-[#d87d4a] hover:bg-[#db9268] flex justify-center items-center font-semibold text-white"
              to={`/product/${filteredData.id}`}
            >
              SEE PRODUCT
            </Link>
          </div>
          <div className="bg-[#f1f1f1] xs:hidden dp:flex justify-center rounded-lg items-center dp:w-[48%] xs:w-full xs:h-[48%] dp:h-full">
            <img
              className="xs:w-full md:w-[45%] xs:h-full dp:w-[90%] dp:h-full rounded-lg"
              src={`${imageApi}${filteredData.image.desktop}`}
              alt="product"
            />
          </div>         
          <div className="bg-[#f1f1f1] xs:flex dp:hidden justify-center items-center dp:w-[48%] xs:w-full xs:h-[48%] dp:h-full">
            <img
              className="xs:w-full md:w-[45%] xs:h-full dp:w-full dp:h-full rounded-lg"
              src={`${imageApi}${filteredData.image.desktop}`}
              alt="product"
            />
          </div>
          <div className="dp:w-[48%] xs:h-[50%] md:px-16 dp:px-0 dp:h-full dp:pl-16 xs:flex dp:hidden flex-col xs:items-center dp:items-start dp:justify-center">
          {filteredData.new&&(
            <h1 className="text-[#d87d4a] tracking-[0.7em] xs:my-2 md:my-5">NEW PRODUCT</h1>
           )}
            <h1 className="uppercase xs:text-3xl xs:text-center dp:text-start md:text-[40px] font-semibold">
              {filteredData.name}
            </h1>
            <p className="my-10 xs:text-center dp:text-start text-[#00000080]">
              {filteredData.description}
            </p>
            <Link
              className="h-14 w-40 bg-[#d87d4a] hover:bg-[#db9268] flex justify-center items-center font-semibold text-white"
              to={`/product/${filteredData.id}`}
            >
              SEE PRODUCT
            </Link>
          </div>
          
        </>
      )}
    </div>
  );
};

export default ProductAds;
