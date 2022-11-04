import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import submit from "../assets/icon-order-confirmation.svg";
import { UserContext } from "../Context/UserContext";

const ThanksForOrder = ({ total, setorderSubmit }) => {
  const { cartItems, setCartItems, setCartItemQuantity, setAllItemPrice } =
    useContext(UserContext);
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
    setorderSubmit(false);
    setCartItems([]);
    setCartItemQuantity(0);
    setAllItemPrice(0);
    window.onscroll = function () {}
  };
  return (
    <div className="w-full h-screen flex justify-center items-center absolute bg-[#00000050]">
      <div className="md:w-[540px] md:h-[530px] xs:h-[85vh] xs:w-[90%] xs:p-6 md:p-10 rounded-lg bg-white ">
        <img src={submit} alt="img" />
        <h1 className="text-2xl textblack font-semibold md:tracking-wider my-6">
          THANK YOU FOR YOUR ORDER
        </h1>
        <p className="text-[#000000bc] my-5">
          You will receive an email confirmation shortly{" "}
        </p>
        <div className="flex w-full md:flex-row md:my-8 xs:my-5 xs:flex-col md:h-36 xs:h-52">
          <div className="md:w-1/2 xs:w-full md:h-full p-5 bg-[#f1f1f1] rounded-l-lg  xs:h-[60%] overflow-y-scroll">
            {cartItems.map((item) => (
              <div
                key={Math.random()}
                className="flex w-full h-14 my-2 items-center border-b-2 justify-between"
              >
                <img className="w-10" src={item.image} alt="" />
                <span className="w-16">
                  <h1 className="font-semibold text-black text-base">
                    {item.name.slice(0, 4)}
                  </h1>
                  <p className="font-semibold text-[#00000080] text-sm">{`$ ${item.price}`}</p>
                </span>
                <p className="font-semibold text-[#00000080] text-sm">{`x${item.quantity}`}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 p-5 xs:w-full md:h-full bg-black flex flex-col justify-end xs:rounded-b-xl  md:rounded-r-lg xs:h-[40%]">
            <h1 className="text-[#f1f1f199] font-semibold text-sm">
              GRAND TOTAL
            </h1>
            <h1 className="text-white font-semibold text-lg">{`$ ${total.toFixed(
              2
            )}`}</h1>
          </div>
        </div>
        <button
          onClick={redirectHome}
          className="w-full h-14 text-white font-semibold bg-[#d87d4a]"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default ThanksForOrder;
