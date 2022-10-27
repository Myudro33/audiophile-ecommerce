import React from "react";
import Heading from "../Components/Heading";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ShopCategorys from "../Components/ShopCategorys";

const Home = () => {
  const { sethash } = useContext(UserContext);
  sethash((prev) => (prev = "/"));
  return (
    <div className="flex flex-col items-center">
      <Heading />
      <ShopCategorys/>
    </div>
  );
};

export default Home;
