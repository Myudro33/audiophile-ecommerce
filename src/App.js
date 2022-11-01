import React, { useEffect, useState } from "react";
import BurgerMenu from "./Components/BurgerMenu";
import Cart from "./Components/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import { UserContext } from "./Context/UserContext";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  const [hash, sethash] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const [allItemPrice, setAllItemPrice] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);
  return (
    <div className="flex w-full flex-col">
      <UserContext.Provider
        value={{
          hash,
          setmenuOpen,
          setcartOpen,
          sethash,
          cartItems,
          setCartItems,
          cartItemQuantity,
          setCartItemQuantity,
          allItemPrice,
          setAllItemPrice,
        }}
      >
        <BurgerMenu menuOpen={menuOpen} />
        <Cart cartOpen={cartOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/product/:id"
            element={
              <Product cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
