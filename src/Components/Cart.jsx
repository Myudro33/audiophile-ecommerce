import React from "react";

const Cart = ({ cartOpen }) => {
  return (
    <>
      {cartOpen && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="w-full h-[88vh] flex xs:justify-center absolute top-24"
        >
          <div className="md:w-[25rem] z-20 flex flex-col p-8 xs:w-[90%] h-60 bg-white rounded-md absolute md:right-10 dp:right-40  top-5">
            <span className="flex justify-between">
              <h1 className="text-black text-lg font-semibold">CART (0)</h1>{" "}
              <p className="underline text-[#00000080] cursor-pointer">
                Remove all
              </p>
            </span>
            <span className="flex justify-between text-[#00000080] mt-8">
              <p className="text-[#00000080]">Total</p>{" "}
              <p className="text-black font-semibold">$ 0,00</p>
            </span>
            <button className="w-full h-14 bg-[#d87d4a] text-white font-semibold mt-8 hover:bg-[#dfa07c]">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
