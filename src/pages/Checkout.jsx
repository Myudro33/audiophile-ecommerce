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
  const [paymentMethod, setpaymentMethod] = useState(false);
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
          <div className={`w-full dp:h-auto md:h-[73rem] ${paymentMethod?'xs:h-[130rem]':'xs:h-[108rem]'} flex flex-col bg-red-200 
          dp:px-36 dp:py-20 md:my-10 md:px-14 xs:py-5 xs:px-5`}>
            <Link className="text-[#00000080] w-full" to={"/"}>
              Go back
            </Link>
            <div className="w-full h-full flex dp:flex-row xs:flex-col justify-between ">
              <div className="flex p-4 dp:w-[62%] xs:w-full xs:h-[62%] dp:h-full bg-[#f1f1f1] rounded-lg my-2">
                <form className="w-full h-full" action="">
                  <div className="w-full  md:h-56 xs:h-[21rem] justify-between flex flex-wrap">
                    <h1 className="font-semibold w-full text-[#d87d4a]">
                      BILLING DETAILS
                    </h1>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Name</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="Alexei Ward"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Email</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="alexei@gmail.com"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="Email"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Number</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="+995 555-55-55-55"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="w-full my-2 md:h-56 xs:h-[25rem] justify-between flex flex-wrap">
                    <h1 className="font-semibold w-full text-[#d87d4a]">
                      SHIPPING INFO
                    </h1>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Address</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="Your address"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>ZIP Code</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="ZIP Code"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>City</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="New York"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Country</p> <p className="text-red-500">Required</p>
                      </span>
                      <input
                        placeholder="United States"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="w-full my-2 md:h-56 xs:h-[16rem] md:justify-between flex md:flex-col xs:flex-col">
                    <h1 className="font-semibold w-full md:h-auto xs:h-7  text-[#d87d4a]">
                      PAYMENT DETAILS
                    </h1>
                    <div className="flex w-full md:justify-between md:flex-row xs:flex-col h-40">
                      <h1 className="text-[#00000080] font-semibold md:h-full xs:my-5 md:my-2">
                        Payment Method
                      </h1>
                      <div className="md:w-[50%] xs:w-full h-full">
                        <div
                          onClick={() => setpaymentMethod(true)}
                          className={`xs:w-full py-3 px-2 h-14 border cursor-pointer rounded-lg flex items-center ${
                            paymentMethod
                              ? "border-[#d87d4a]"
                              : "border-[#00000080]"
                          }`}
                        >
                          <input
                            className="accent-[#d87d4a] w-4 h-4"
                            checked={paymentMethod}
                            name="pay"
                            type="radio"
                          />
                          <h1 className="ml-2">e-Money</h1>
                        </div>
                        <div
                          onClick={() => setpaymentMethod(false)}
                          className={`xs:w-full py-3 my-4 px-2 h-14 border cursor-pointer rounded-lg items-center flex ${
                            !paymentMethod
                              ? "border-[#d87d4a]"
                              : "border-[#00000080]"
                          }`}
                        >
                          <input
                            checked={!paymentMethod}
                            className="accent-[#d87d4a] h-4 w-4"
                            name="pay"
                            type="radio"
                          />
                          <h1 className="ml-2">Cash on Delivery</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  {paymentMethod && (
                    <div className="flex w-full justify-between md:flex-row xs:flex-col h-20">
                      <label
                        className="flex flex-col xs:w-full my-1  md:w-[48%]"
                        htmlFor=""
                      >
                        <span className="flex text-xs my-1 justify-between">
                          <p>e-Money Number</p>{" "}
                          <p className="text-red-500">Required</p>
                        </span>
                        <input
                          placeholder="e-Money Number"
                          className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                          type="text"
                        />
                      </label>
                      <label
                        className="flex flex-col xs:w-full my-1 md:w-[48%]"
                        htmlFor=""
                      >
                        <span className="flex text-xs my-1 justify-between">
                          <p>e-Money Pin</p>{" "}
                          <p className="text-red-500">Required</p>
                        </span>
                        <input
                          placeholder="e-Money Pin"
                          className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border border-[#00000080]"
                          type="text"
                        />
                      </label>
                    </div>
                  )}
                </form>
              </div>
              <div className=" dp:w-[35%] xs:w-full xs:h-[35%] dp:h-full bg-green-200 rounded-lg my-2"></div>
            </div>
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
