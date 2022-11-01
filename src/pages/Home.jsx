import React from "react";
import Heading from "../Components/Heading";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ShopCategorys from "../Components/ShopCategorys";
import HomeAds from "../Components/HomeAds";
import AudioGear from "../Components/AudioGear";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const Home = () => {
  const { sethash } = useContext(UserContext);
  sethash((prev) => (prev = "/"));
  return (
    <div className="flex flex-col items-center w-full">
        <Navbar />
      <Heading />
      <ShopCategorys />
      <HomeAds />
      <AudioGear/>
      <Footer/>
    </div>
  );
};

export default Home;
