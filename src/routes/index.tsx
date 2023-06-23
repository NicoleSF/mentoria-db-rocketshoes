import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import "../global.scss";
import { Layout } from "../pages/Layout";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
