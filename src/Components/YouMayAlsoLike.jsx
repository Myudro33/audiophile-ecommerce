import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const YouMayAlsoLike = ({ similar, data }) => {
  const imageApi =
    "https://chkhikvadzeg.github.io/audiophile-ecommerce-website";
  const firstSimilar = data.filter((item)=>item.slug===similar.others[0].slug)
  const secondSimilar = data.filter((item)=>item.slug===similar.others[1].slug)
  const thirdSimilar = data.filter((item)=>item.slug===similar.others[2].slug)
useEffect(()=>{
 window.scrollTo(0,0)
},[similar])  
  return (
    <div className="dp:h-[670px] md:h-[615px] my-20 xs:h-[1550px] dp:w-4/5 xs:w-[90%] flex flex-col md:justify-between">
      <h1 className="md:text-[40px] w-full h-[10%] xs:text-[28px] font-semibold">
        YOU MAY ALSO LIKE
      </h1>
      <div className="flex md:flex-row justify-between h-[80%]  xs:flex-col ">
        
          <div className="md:w-[30%] xs:w-full flex flex-col items-center h-full">
            <div className="w-full flex justify-center items-center h-[50%] bg-[#f1f1f1]">
              <img src={`${imageApi}${similar.others[0].image.desktop}`} alt="img" />
            </div>
            <h1 className="dp:text-[40px]  xs:text-[28px] font-semibold uppercase my-10">
              {similar.others[0].name}
            </h1>
            <Link
            to={`/product/${firstSimilar[0].id}`}
              className="h-12 w-40 bg-[#d87d4a] hover:bg-[#d19673] text-white font-semibold flex justify-center items-center"
            >
              VIEW PRODUCT
            </Link>
          </div>
          <div className="md:w-[30%] xs:w-full flex flex-col items-center h-full">
            <div className="w-full flex justify-center items-center h-[50%] bg-[#f1f1f1]">
              <img src={`${imageApi}${similar.others[1].image.desktop}`} alt="img" />
            </div>
            <h1 className="dp:text-[40px]  xs:text-[28px] font-semibold uppercase my-10">
            {similar.others[1].name}
            </h1>
            <Link
            to={`/product/${secondSimilar[0].id}`}
              className="h-12 w-40 bg-[#d87d4a] hover:bg-[#d19673] text-white font-semibold flex justify-center items-center"
            >
              VIEW PRODUCT
            </Link>
          </div>
          <div className="md:w-[30%] xs:w-full flex flex-col items-center h-full">
            <div className="w-full flex justify-center items-center h-[50%] bg-[#f1f1f1]">
              <img src={`${imageApi}${similar.others[2].image.desktop}`} alt="img" />
            </div>
            <h1 className="dp:text-[40px]  xs:text-[28px] font-semibold uppercase my-10">
            {similar.others[2].name}
            </h1>
            <Link
            to={`/product/${thirdSimilar[0].id}`}
            
              className="h-12 w-40 bg-[#d87d4a] hover:bg-[#d19673] text-white font-semibold flex justify-center items-center"
            >
              VIEW PRODUCT
            </Link>
          </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
