import React from "react";
import { slide as Menu } from "react-burger-menu";
import headphones from "../assets/image-category-thumbnail-headphones.png";
import speakers from "../assets/image-category-thumbnail-speakers.png";
import earphones from "../assets/image-category-thumbnail-earphones.png";
import arrow from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const BurgerMenu = ({ menuOpen }) => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "65%",
    },
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div>
      <Menu styles={styles} noOverlay isOpen={menuOpen} width={"100%"} left>
        <div className="bg-[#f1f1f1] w-full h-1/4">
          <img
            className="w-24 m-auto -translate-y-10"
            src={headphones}
            alt="headphones"
          />
          <h1 className="text-center">Headphones</h1>
          <span className="flex justify-center items-center">
            <img className="h-4 mr-2" src={arrow} alt="arrow" />
            <Link to={'/headphones'}>SHOP</Link>
          </span>
        </div>
        <div className="bg-[#f1f1f1] w-full h-1/4 mt-14">
          <img
            className="w-24 m-auto -translate-y-10"
            src={speakers}
            alt="headphones"
          />

          <h1 className="text-center">Speakers</h1>
          <span className="flex justify-center items-center">
            <img className="h-4 mr-2" src={arrow} alt="arrow" />
            <Link to={'/speakers'}>SHOP</Link>
          </span>
        </div>
        <div className="bg-[#f1f1f1] w-full h-1/4 mt-14">
          <img
            className="w-24 m-auto -translate-y-10"
            src={earphones}
            alt="headphones"
          />
          <h1 className="text-center">Earphones</h1>
          <span className="flex justify-center items-center">
            <img className="h-4 mr-2" src={arrow} alt="arrow" />
            <Link to={'/earphones'}>SHOP</Link>
          </span>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
