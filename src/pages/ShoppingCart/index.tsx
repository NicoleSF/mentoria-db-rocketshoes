import { useContext } from "react";
import { ShoesProps } from "../../features/products/components/Shoes";
import styles from "./styles.module.scss";
import { CartContext } from "../../context/CartContex";

export type ShoppingCartProduct = {
  data: ShoesProps;
  quantity: 1;
  price: number;
};

export const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1 className={styles.h1Color}>Tenis adicionados</h1>
      <ul>
        {cart.map((products) => (
          <li key={products.id} className={styles.liColor}>
            <p>Produto: {products.description}</p>
            <p>Preço: {products.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
