import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../Components/ProductInfo";
import data from "../storage.json";
import { Link } from "react-router-dom";
import Features from "../Components/Features";

const Product = () => {
  const { id } = useParams();
  const filteredProduct = data.filter((item) => item.id === Number(id));


  return (
    <div className="w-full flex flex-col items-center">
      <Link to={`/${filteredProduct[0].category}`} className="w-[80%] text-[#00000080]  mt-10">Go Back</Link>
      <ProductInfo filteredProduct={filteredProduct[0]} />
      <Features filteredProduct={filteredProduct[0]} />
    </div>
  );
};

export default Product;
