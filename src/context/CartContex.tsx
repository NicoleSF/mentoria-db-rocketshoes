import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../types/Produto";
import { Cart } from "../types/Cart";

type CartContextData = {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  handleAdd: (product: Product) => void;
};

type CartContextProviderProps = {
  children: ReactNode;
};

const keyLocalstorage = "saveCart";

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart[]>(() => {
    const saveCart = localStorage.getItem(keyLocalstorage);
    return saveCart ? JSON.parse(saveCart) as Cart[] : [];
    
  });

  useEffect(() => {
    console.log(cart);
  }, [cart])


  //adicionar produtos no carrinho - ok
  //quando adicionar o produto, a quantidade do carrinho muda
  //os produtos não podem se repetir nos itens do carrinho

  function handleAdd(newProduct: Product): void {
    const productExist = cart.filter((item) => {
      return item.id === newProduct.id
    })
    if(productExist.length !== 0){
      const newCart = cart.map((product) => {
        if(product.id === newProduct.id){
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return {...product}
      })
      localStorage.setItem(keyLocalstorage, JSON.stringify(newCart));
      setCart(newCart)
    }else{
      const cartCopy = [...cart];
      cartCopy.push({
        ...newProduct,
        quantity: 1
      })
      localStorage.setItem(keyLocalstorage, JSON.stringify(cartCopy));
      setCart(cartCopy);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};
