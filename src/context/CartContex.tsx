import { ReactNode, createContext, useState } from "react";
import { Product } from "../types/Produto";

type CartContextData = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  handleAdd: (product: Product) => void;
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAdd = (product: Product) => {
    setCart((previous) => {
      const previousProduct = [...previous];
      previousProduct.push(product);
      return previousProduct;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};
