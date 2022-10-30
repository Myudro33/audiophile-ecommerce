import React from "react";
import { useContext } from "react";
import CategoryHeading from "../Components/CategoryHeading";
import ProductAds from "../Components/ProductAds";
import { UserContext } from "../Context/UserContext";
import data from "../storage.json";


const Headphones = () => {
  const filteredData = data.filter((item) => item.category === "headphones");
  const { sethash } = useContext(UserContext);
  sethash("/headphones");
  
  return (
    <div className="w-full flex flex-col items-center">
      <CategoryHeading title={"HEADPHONES"} />
     <ProductAds filteredData={filteredData[0]} reverse={false} />
     <ProductAds filteredData={filteredData[1]} reverse={true} />
     <ProductAds filteredData={filteredData[2]} reverse={false} />
    </div>
  );
};

export default Headphones;
