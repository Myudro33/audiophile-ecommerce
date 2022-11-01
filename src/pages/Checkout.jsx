import React from "react";
import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Checkout = () => {
  const { cartItems } = useContext(UserContext);
  const [counter, setCounter] = useState(10);
  const redirect = useNavigate();
  const navigate = () => {
    setCounter((prev) => (prev -= 1));
    if (counter < 2 && cartItems.length === 0) {
      redirect("/");
    }
  };
  useEffect(() => {
    setTimeout(navigate, 1000);
  });

  return (
    <div className="w-full h-auto">
      {cartItems.length > 0 ? (
        <div>
          <Navbar />
          <div className="w-full h-[110vh] bg-red-200 dp:px-36 dp:my-20 md:my-10 md:px-10">
            <Link className="text-[#00000080] w-full" to={"/"}>
              Go back
            </Link>
            <div className="flex h-full bg-white my-2"></div>
          </div>

          <Footer />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1 className="xs:text-3xl md:text-4xl font-semibold text-[#00000080]">
            Your cart is empty
          </h1>
          <Link className="xs:text-2xl md:text-3cxl text-[#d87d4a]" to={"/"}>
            Go back
          </Link>
          <p className="text-[#00000080] text-sm">
            Redirecting in {counter} seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
