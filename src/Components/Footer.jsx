import React from "react";
import { useContext } from "react";
import logo from "../assets/logo.svg";
import fbIcon from "../assets/icon-facebook.svg";
import igIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
const Footer = () => {
  const { hash } = useContext(UserContext);

  return (
    <div className="w-full dp:h-96 md:h-[26rem] xs:h-[42rem] bg-[#101010] mt-14 xs:py-14 xs:px-4 md:px-10 dp:py-16 dp:px-44 flex flex-col">
      <div className="w-full flex dp:flex-row xs:flex-col md:h-28 md:justify-between xs:items-center md:items-start dp:items-center">
        <img src={logo} alt="logo" className="xs:w-36" />
        <div className="h-full xs:h-32 xs:mt-10 md:mt-0  xs:flex-col md:flex-row md:h-20  xs:flex xs:w-full md:w-[27rem] text-white justify-between items-center">
          <Link
            className={`hover:text-[#d87d4a]  ${
              hash === "/" ? "text-[#d87d4a]" : ""
            } md:text-base xs:text-sm tracking-wider font-semibold `}
            to={"/"}
          >
            HOME
          </Link>
          <Link
            className={`hover:text-[#d87d4a] ${
              hash === "/headphones" ? "text-[#d87d4a]" : ""
            } md:text-base xs:text-sm tracking-wider font-semibold `}
            to={"/headphones"}
          >
            HEADPHONES
          </Link>
          <Link
            className={`hover:text-[#d87d4a] ${
              hash === "/speakers" ? "text-[#d87d4a]" : ""
            } md:text-base xs:text-sm tracking-wider font-semibold`}
            to={"/speakers"}
          >
            SPEAKERS
          </Link>
          <Link
            className={`hover:text-[#d87d4a] ${
              hash === "/earphones" ? "text-[#d87d4a]" : ""
            } md:text-base xs:text-sm tracking-wider font-semibold`}
            to={"/earphones"}
          >
            EARPHONES
          </Link>
        </div>
      </div>
      <p className="text-[#ffffff80] xs:text-center md:text-start xs:mt-7 md:mt-0 dp:w-2/4 md:w-full dp:my-14">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="text-[#ffffff80] font-semibold xs:mt-20 xs:h-28 md:h-9 dp:mt-0 md:mt-24 xs:flex-col xs:items-center md:flex-row flex justify-between">
        <p>© Copyright 2022. All Rights Reserved</p>
        <div className="w-28 flex justify-between">
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/DiibbzzzZz"
          >
            <img src={fbIcon} alt="icon" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/qannashvili/"
            target={"_blank"}
          >
            <img src={igIcon} alt="icon" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/qannashvili/"
            target={"_blank"}
          >
            <img src={twitterIcon} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
