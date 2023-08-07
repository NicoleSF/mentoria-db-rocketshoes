import { useState } from "react";

export const useShoppingCart = () => {

  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);


  const fetchProductsData = () => {
    fetch("http://localhost:3000/shoppingCart")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  return { fetchProductsData, products, items }
}