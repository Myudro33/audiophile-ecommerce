import React from "react";

const Features = ({ filteredProduct }) => {
  return (
    <div className="dp:w-[80%] xs:w-[90%] p-2 xs:my-28  dp:h-80 md:h-[36rem] xs:h-[52rem] flex dp:flex-row xs:flex-col justify-between ">
      <div className="dp:w-[65%] xs:w-full">
        <h1 className="md:text-[40px] xs:text-3xl font-semibold">FEATURES</h1>
        <p className="text-[#00000080] my-5">
          {filteredProduct.features.slice(
            0,
            filteredProduct.features.length / 2.34
          )}
        </p>
        <p className="text-[#00000080] my-5">
          {filteredProduct.features.slice(
            filteredProduct.features.length / 2.34,
            filteredProduct.features.length
          )}
        </p>
      </div>
      <div className="dp:w-[25%] flex md:w-full xs:flex-col dp:flex-col md:mt-5 dp:mt-0 md:flex-row">
        <h1 className="md:text-[40px] xs:text-3xl xs:mt-10 md:mt-0 dp:w-full md:w-1/2 font-semibold">IN THE BOX</h1>
        <div className="dp:w-full md:w-[45%] xs:mt-5 md:mt-0 dp:mt-5 h-[70%] flex flex-col">
          {filteredProduct.includes.map((item) => (
            <span className="flex text-[#d87d4a] font-semibold my-2">
              {`${item.quantity}x`}{" "}
              <p className="text-[#00000080] ml-5 ">{item.item}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
