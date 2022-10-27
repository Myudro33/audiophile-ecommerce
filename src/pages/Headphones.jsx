import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Headphones = () => {
  const { sethash } = useContext(UserContext);
  sethash("/headphones");
  return <div>Headphones</div>;
};

export default Headphones;
