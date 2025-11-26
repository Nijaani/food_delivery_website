
import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Placeorder from "../Pages/Placeorder/Placeorder"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/placeorder" element={<Placeorder />} />
    </Routes>
  );
};

export default AppRoutes;
