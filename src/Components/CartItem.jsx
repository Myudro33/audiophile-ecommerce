import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const CartItem = ({ price, name, image, quantity }) => {
 const {cartItems ,setCartItems} = useContext(UserContext)
 console.log(cartItems);   
 const increaseQuantity = () => {
  
  };
  const decreaseQuantity = () => {};
  return (
    <div className="w-full h-16 flex justify-between items-center my-3 flex-shrink-0">
      <div className="h-full w-32 flex justify-between items-center">
        <div className="w-16 bg-[#f1f1f1] rounded-lg flex items-center justify-center h-full">
          <img className="w-1/2 h-1/2" src={image} alt="img" />
        </div>
        <div className="w-12">
          <h1 className="text-black font-semibold text-sm">{name}</h1>
          <p className="text-[#00000080] text-sm font-semibold">{`$ ${price}`}</p>
        </div>
      </div>
      <div className="w-28 h-1/2 flex items-center justify-around bg-[#f1f1f1]">
        <p
          onClick={decreaseQuantity}
          className="text-[#00000080] cursor-pointer"
        >
          -
        </p>
        <span className="font-semibold">{quantity}</span>
        <p
          onClick={increaseQuantity}
          className="text-[#00000080] cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
};

export default CartItem;
