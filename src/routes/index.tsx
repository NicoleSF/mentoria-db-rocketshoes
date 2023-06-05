import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import "../global.scss";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
