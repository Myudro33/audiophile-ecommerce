import React from "react";
import burgerIcon from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { hash, cartItemQuantity,setmenuOpen,setcartOpen } = useContext(UserContext);
  return (
    <div className="w-full h-24 border-b-2 border-[gray] flex items-center justify-between py-8 md:px-10 xs:px-6 dp:px-36 bg-black text-white">
      <img
        onClick={() => setmenuOpen((prev) => !prev)}
        className="dp:hidden w-4 h-4 cursor-pointer"
        src={burgerIcon}
        alt="butgericon"
      />
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="h-full xs:hidden  md:flex w-[27rem] justify-between items-center">
        <Link
          className={`hover:text-[#d87d4a] text-sm ${
            hash === "/" ? "text-[#d87d4a]" : ""
          } tracking-wider font-medium `}
          to={"/"}
        >
          HOME
        </Link>
        <Link
          className={`hover:text-[#d87d4a] ${
            hash === "/headphones" ? "text-[#d87d4a]" : ""
          } text-sm tracking-wider font-medium `}
          to={"/headphones"}
        >
          HEADPHONES
        </Link>
        <Link
          className={`hover:text-[#d87d4a] ${
            hash === "/speakers" ? "text-[#d87d4a]" : ""
          } text-sm tracking-wider font-medium`}
          to={"/speakers"}
        >
          SPEAKERS
        </Link>
        <Link
          className={`hover:text-[#d87d4a] ${
            hash === "/earphones" ? "text-[#d87d4a]" : ""
          } text-sm tracking-wider font-medium`}
          to={"/earphones"}
        >
          EARPHONES
        </Link>
      </div>
      <div>
        <img
          onClick={() => setcartOpen((prev) => !prev)}
          className="cursor-pointer"
          src={cartIcon}
          alt="carticon"
        />
        {cartItemQuantity > 0 && (
          <p className="absolute translate-x-4 -translate-y-8 bg-[#d87d4a] rounded-full w-5 h-5 text-xs flex justify-center items-center">
            {cartItemQuantity}
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
