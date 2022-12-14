import React from "react";
import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ThanksForOrder from "../Components/ThanksForOrder";
import { useFormik } from "formik";
import * as yup from "yup";

const Checkout = () => {
  const { cartItems, allItemPrice } = useContext(UserContext);
  const [counter, setCounter] = useState(10);
  const [paymentMethod, setpaymentMethod] = useState(false);
  const [shipping, setshipping] = useState(0);
  const [vat, setvat] = useState(0);
  const [total, settotal] = useState(0);
  const redirect = useNavigate();
  const [orderSubmit, setorderSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      moneyNumber: "",
      moneyPin: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(4, "Too short").required(),
      email: yup.string().email().required(),
      number: yup
        .string()
        .matches(/^(\+?995)?(79\d{7}|5\d{8})$/, "Georgian format")
        .required(),
      address: yup.string().required(),
      zip: yup
        .string()
        .matches(/^[0-9]{5}([-]\d{4})?$/, "Enter valid zip")
        .required(),
        city:yup.string().required(),
        country:yup.string().required(),
    }),
    onSubmit: (values) => {
      setorderSubmit(true)
    },
  });

  function disableScroll() {
    if (orderSubmit === true) {
      window.scrollTo(0, 0);
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    }
  }
  disableScroll();

  useEffect(() => {
    if (counter < 1 && cartItems.length === 0) {
      redirect("/");
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, cartItems.length, redirect]);

  useEffect(() => {
    setshipping(allItemPrice / 100);
    setvat(allItemPrice / 5);
    settotal(allItemPrice);
    settotal((prev) => (prev += shipping));
    settotal((prev) => (prev += vat));
  }, [allItemPrice, shipping, vat]);
  return (
    <div className="w-full h-auto bg-[#fafafa]">
      {cartItems.length > 0 ? (
        <div>
          {orderSubmit && (
            <ThanksForOrder setorderSubmit={setorderSubmit} total={total} />
          )}
          <Navbar />
          <div
            className={`w-full dp:h-auto ${
              paymentMethod ? "md:h-[100rem]" : "md:h-[92rem]"
            } ${
              paymentMethod ? "xs:h-[125rem]" : "xs:h-[110rem]"
            } flex flex-col 
          dp:px-36 dp:py-20 md:my-10 md:px-14 xs:py-5 xs:px-5`}
          >
            <Link className="text-[#00000080] w-full" to={"/"}>
              Go back
            </Link>
            <div className="w-full h-full flex dp:flex-row xs:flex-col  justify-between ">
              <div
                className={`flex p-4 dp:w-[62%] xs:w-full xs:h-[78rem] bg-white ${
                  paymentMethod ? "md:h-[52rem]" : "md:h-[45rem]"
                } dp:h-full  rounded-lg my-2`}
              >
                <form onSubmit={formik.handleSubmit} className="w-full h-full" action="">
                  <div className="w-full  md:h-56 xs:h-[21rem] justify-between flex flex-wrap">
                    <h1 className="font-semibold w-full text-[#d87d4a]">
                      BILLING DETAILS
                    </h1>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Name</p>
                        {formik.errors.name && formik.touched.name && (
                          <p className="text-red-500">{formik.errors.name}</p>
                        )}
                      </span>
                      <input
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Alexei Ward"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border"
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Email</p>
                        {formik.errors.email && formik.touched.email && (
                          <p className="text-red-500">{formik.errors.email}</p>
                        )}
                      </span>
                      <input
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="alexei@gmail.com"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border"
                        type="Email"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Number</p>
                        {formik.errors.number && formik.touched.number && (
                          <p className="text-red-500">{formik.errors.number}</p>
                        )}
                      </span>
                      <input
                        name="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.number}
                        placeholder="+995 555-55-55-55"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border"
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
                        <p>Address</p>
                        {formik.errors.address && formik.touched.address && (
                          <p className="text-red-500">
                            {formik.errors.address}
                          </p>
                        )}
                      </span>
                      <input
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder="Your address"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border "
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>ZIP Code</p>
                        {formik.errors.zip && formik.touched.zip && (
                          <p className="text-red-500">{formik.errors.zip}</p>
                        )}
                      </span>
                      <input
                        name="zip"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zip}
                        placeholder="ZIP Code"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border "
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>City</p>
                        {formik.errors.city && formik.touched.city && (
                          <p className="text-red-500">{formik.errors.city}</p>
                        )}
                      </span>
                      <input
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                        placeholder="New York"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border "
                        type="text"
                      />
                    </label>
                    <label
                      className="flex flex-col xs:w-full  md:w-[48%]"
                      htmlFor=""
                    >
                      <span className="flex text-xs my-1 justify-between">
                        <p>Country</p>
                        {formik.errors.country && formik.touched.country && (
                          <p className="text-red-500">
                            {formik.errors.country}
                          </p>
                        )}
                      </span>
                      <input
                        name="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                        placeholder="United States"
                        className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border "
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
                            paymentMethod ? "border-[#d87d4a]" : ""
                          }`}
                        >
                          <input
                            onClick={() => setpaymentMethod(false)}
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
                            !paymentMethod ? "border-[#d87d4a]" : ""
                          }`}
                        >
                          <input
                            onChange={() => setpaymentMethod(false)}
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
                              <p className="text-red-500">
                                Required
                              </p>
                            
                        </span>
                        <input
                          name="moneyNumber"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.moneyNumber}
                          placeholder="e-Money Number"
                          className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border "
                          type="text"
                        />
                      </label>
                      <label
                        className="flex flex-col xs:w-full my-1 md:w-[48%]"
                        htmlFor=""
                      >
                        <span className="flex text-xs my-1 justify-between">
                          <p>e-Money Pin</p>{" "}
                      
                              <p className="text-red-500">
                              Required
                              </p>
                            
                        </span>
                        <input
                          name="moneyPin"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.moneyPin}
                          placeholder="e-Money Pin"
                          className="h-14 px-5 rounded-lg bg-transparent outline-[#d87d4a] border"
                          type="text"
                        />
                      </label>
                    </div>
                  )}
                </form>
              </div>
              <div
                className={` dp:w-[35%] xs:w-full xs:h-[40rem] dp:h-full p-4 bg-white rounded-lg my-2`}
              >
                <h1 className="font-semibold w-full text-lg">SUMMARY</h1>
                <div
                  className={`w-full ${
                    cartItems.length > 2 ? "h-72 overflow-y-scroll" : "h-32"
                  }`}
                >
                  {cartItems.map((item) => (
                    <div
                      key={Math.random()}
                      className="h-16 w-full my-3 flex justify-between  items-center"
                    >
                      <div className="dp:w-1/3 md:w-1/4 xs:w-1/2 h-full flex items-center">
                        <div className="w-1/2 h-full bg-[#f1f1f1] rounded-lg flex justify-center items-center">
                          <img
                            className="w-1/2 h-1/2"
                            src={item.image}
                            alt="dawkdm"
                          />
                        </div>
                        <span className="ml-2">
                          <p className="text-black font-semibold text-base">
                            {item.name.slice(0, 4)}
                          </p>
                          <p className="font-semibold text-[#00000080]">{`$ ${item.price}`}</p>
                        </span>
                      </div>
                      <p className="flex items-center font-semibold text-[#00000080]">{`x ${item.quantity}`}</p>
                    </div>
                  ))}
                </div>
                <div className="my-4 flex flex-col h-64">
                  <span className="flex justify-between my-1 items-center">
                    <h1 className="text-lg text-[#00000080]">TOTAL </h1>
                    <p className="text-black font-semibold text-lg">{`$ ${allItemPrice}`}</p>
                  </span>
                  <span className="flex justify-between my-1 items-center">
                    <h1 className="text-lg text-[#00000080]">SHIPPING</h1>
                    <p className="text-black font-semibold text-lg ">{`$ ${shipping}`}</p>
                  </span>
                  <span className="flex justify-between my-1 items-center">
                    <h1 className="text-lg text-[#00000080]">VAT (INCLUDED)</h1>
                    <p className="text-black font-semibold text-lg ">{`$ ${vat}`}</p>
                  </span>
                  <span className="flex justify-between my-4 items-center">
                    <h1 className="text-lg text-[#00000080]">GRAND TOTAL</h1>
                    <p className="text-black font-semibold text-lg ">
                      {total.toFixed(2)}
                    </p>
                  </span>
                  <button onClick={formik.handleSubmit} type='submit' className="w-full h-14 bg-[#d87d4a] text-white font-semibold tracking-wider my-4">
                    CONTINUE & PAY
                  </button>
                </div>
              </div>
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
