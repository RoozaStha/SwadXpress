import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import SwadCTA from "./components/ActionSection/SwadCTA";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" elememt={<Cart />} />
          <Route path="/" element={<PlaceOrder />} />
        </Routes>
      </div>
      <SwadCTA />
      <Footer />
    </>
  );
};

export default App;
