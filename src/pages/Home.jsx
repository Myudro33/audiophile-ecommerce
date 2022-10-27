import React from "react";
import Heading from "../Components/Heading";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const { sethash } = useContext(UserContext);
  sethash((prev) => (prev = "/"));
  return (
    <div>
      <Heading />
    </div>
  );
};

export default Home;
