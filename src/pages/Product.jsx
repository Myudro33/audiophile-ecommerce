import React from "react";
import { useParams } from "react-router-dom";
import data from "../storage.json";

const Product = () => {
  const { id } = useParams();
  const filteredProduct = data.filter((item) => item.id === Number(id));
  console.log(filteredProduct);

  return <div>{id}</div>;
};

export default Product;
