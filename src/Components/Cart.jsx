import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cartOpen }) => {
  const {
    cartItems,
    setcartOpen,
    setCartItems,
    cartItemQuantity,
    allItemPrice,
  } = useContext(UserContext);
  return (
    <>
      {cartOpen && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="w-full h-[88vh] flex xs:justify-center absolute top-24"
        >
          <div className="md:w-[25rem] h-auto z-20 flex flex-col p-8 xs:w-[90%]  bg-white rounded-md absolute md:right-10 dp:right-40  top-5">
            <span className="flex justify-between">
              <h1 className="text-black text-lg font-semibold">
                CART ({cartItemQuantity})
              </h1>{" "}
              <p
                onClick={() => setCartItems([])}
                className="underline text-[#00000080] hover:text-[#d87d4a] cursor-pointer"
              >
                Remove all
              </p>
            </span>
            <div className="w-full flex flex-col h-44 my-5 overflow-scroll">
              {cartItems?.map((item) => (
                <CartItem
                  key={Math.random()}
                  price={item.price}
                  name={item.name}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <span className="flex justify-between text-[#00000080] mt-8">
              <p className="text-[#00000080]">Total</p>{" "}
              <p className="text-black font-semibold">{`$ ${allItemPrice},00`}</p>
            </span>
            <Link onClick={()=>setcartOpen(false)} to={'/checkout'} className="w-full h-14 flex justify-center items-center bg-[#d87d4a] text-white font-semibold mt-8 hover:bg-[#dfa07c]">
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
