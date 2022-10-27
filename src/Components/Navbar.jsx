import React from "react";
import burgerIcon from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import cartIcon from '../assets/icon-cart.svg'
import { Link } from "react-router-dom";

const Navbar = ({setmenuOpen}) => {
  return (
    <div className="w-full h-24 flex items-center justify-between py-8 md:px-10 xs:px-6 dp:px-36 bg-[#191919] text-white">
      <img onClick={()=>setmenuOpen(prev=>!prev)} className="dp:hidden w-4 h-4 cursor-pointer" src={burgerIcon} alt="butgericon" />
      <Link to={"/"}>
        <img  src={logo} alt="logo" />
      </Link>
      <div className="h-full xs:hidden  md:flex w-[27rem] justify-between items-center">
        <Link className="hover:text-[#d87d4a] text-sm font-medium" to={"/"}>HOME</Link>
        <Link className="hover:text-[#d87d4a] text-sm font-medium" to={"/headphones"}>HEADPHONES</Link>
        <Link className="hover:text-[#d87d4a] text-sm font-medium" to={"/speakers"}>SPEAKERS</Link>
        <Link className="hover:text-[#d87d4a] text-sm font-medium" to={"/earphones"}>EARPHONES</Link>
      </div>
      <img className="cursor-pointer" src={cartIcon} alt="carticon" />
    </div>
  );
};

export default Navbar;
