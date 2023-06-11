import styles from "./styles.module.scss";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContex";

export type ShoesProps = {
  id: number;
  description: string;
  price: number;
  image: string;
};

export const Shoes = ({ id, description, price, image }: ShoesProps) => {
  const { handleAdd } = useContext(CartContext);

  // const handleClick = () => {
  //   setContador((valorAtual) => {
  //     return valorAtual + 1;
  //   });
  // };

  return (
    <>
      <div key={id} className={styles.shoesContainer}>
        <img src={image} alt={description} className={styles.image} />
        <p>{description}</p>
        <p>{price}</p>
        <Button
          variant="contained"
          onClick={() => handleAdd({ id, description, price, image })}
        >
          <ShoppingCart sx={{ color: "white" }} fontSize="small" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </>
  );
};
