import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const CartItem = ({ price, name, image, quantity }) => {
  const { cartItems, setCartItems, setCartItemQuantity, setAllItemPrice } =
    useContext(UserContext);
  const increaseQuantity = () => {
    const newArray = cartItems.map((obj) => {
      if (obj.name === name) {
        setCartItemQuantity((prev) => prev + 1);
        setAllItemPrice((prev) => prev + obj.price);
        return { ...obj, quantity: (obj.quantity += 1) };
      }
      return obj;
    });
    setCartItems(newArray);
  };
  const decreaseQuantity = () => {
    const newArray = cartItems
      .map((obj) => {
        if (obj.name === name) {
          setCartItemQuantity((prev) => prev - 1);
          setAllItemPrice((prev) => prev - obj.price);
          return { ...obj, quantity: (obj.quantity -= 1) };
        }
        return obj;
      })
      .filter((item) => item.quantity > 0);
    setCartItems(newArray);
  };
  return (
    <div className="w-full h-16 flex justify-between items-center my-3 flex-shrink-0">
      <div className="h-full w-32 flex justify-between items-center">
        <div className="w-16 bg-[#f1f1f1] rounded-lg flex items-center justify-center h-full">
          <img className="w-1/2 h-1/2" src={image} alt="img" />
        </div>
        <div className="w-12">
          <h1 className="text-black font-semibold text-sm">
            {name.slice(0, 4)}
          </h1>
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
