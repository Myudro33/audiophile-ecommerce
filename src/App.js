import React, { useState } from "react";
import BurgerMenu from "./Components/BurgerMenu";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import { UserContext } from "./Context/UserContext";

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  const [hash, sethash] = useState("");
  return (
    <div className="flex w-full flex-col">
      <UserContext.Provider value={{ hash, sethash }}>
        <Navbar setmenuOpen={setmenuOpen} setcartOpen={setcartOpen} />
        <BurgerMenu menuOpen={menuOpen} />
        <Cart cartOpen={cartOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
