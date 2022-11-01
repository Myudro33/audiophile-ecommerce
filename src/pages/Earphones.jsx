import React from "react";
import { useContext } from "react";
import CategoryHeading from "../Components/CategoryHeading";
import ProductAds from "../Components/ProductAds";
import { UserContext } from "../Context/UserContext";
import data from "../storage.json";
import AudioGear from "../Components/AudioGear";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const Earphones = () => {
  const { sethash } = useContext(UserContext);
  const filteredData = data.filter((item) => item.category === "earphones");
  sethash("/earphones");
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <CategoryHeading title="EARPHONES" />
      <ProductAds filteredData={filteredData[0]} reverse={true} />
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Earphones;
