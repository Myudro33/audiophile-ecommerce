import React from "react";


const ProductInfo = ({ filteredProduct }) => {
  const imageApi =
    "https://chkhikvadzeg.github.io/audiophile-ecommerce-website";
  return (
    <div className="dp:w-[80%] my-8 xs:w-[90%] xs:px-3 xs:h-[40rem] md:h-[30rem] dp:h-[35rem] flex xs:flex-col xs:justify-between md:flex-row dp:justify-between">
      <div className="bg-[#f1f1f1] flex justify-center items-center md:w-[48%] xs:w-full xs:h-[48%] md:h-full">
        <img
          className="xs:w-1/2 md:w-[45%] xs:h-1/2 dp:w-1/2 md:h-1/2 rounded-lg"
          src={`${imageApi}${filteredProduct.image.desktop}`}
          alt="product"
        />
      </div>{" "}
      <div className="md:w-[48%] md:h-full xs:h-[48%] md:px-5  dp:px-0 dp:h-full dp:pl-16 flex flex-col xs:items-center dp:items-start dp:justify-center">
        <h1 className="uppercase md:mt-10 xs:text-3xl md:text-[40px] font-semibold">
          {filteredProduct.name}
        </h1>
        <p className="my-10 xs:text-center md:text-start text-[#00000080]">
          {filteredProduct.description}
        </p>
        <h1 className="text-lg font-semibold mb-8 w-full">{`$ ${filteredProduct.price}`}</h1>
        <div className="flex">
          <div className="w-32 flex justify-between h-14 bg-[#f1f1f1] mr-4 p-4">
            <p className="text-[#00000080] cursor-pointer">-</p>
            <h1>1</h1>
            <p className="text-[#00000080] cursor-pointer">+</p>
          </div>
          <button className="h-14 w-40 bg-[#d87d4a] hover:bg-[#db9268] flex justify-center items-center font-semibold text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
