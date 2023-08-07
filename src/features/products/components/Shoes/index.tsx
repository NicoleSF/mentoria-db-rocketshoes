import styles from "./styles.module.scss";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContex";
import { Product } from "../../../../types/Produto";
import { formatCurrency } from "../../../../utils/formatCurrency";

export const Shoes = ({ id, description, price, image }: Product) => {
  const { handleAdd, cart } = useContext(CartContext);

  return (
    <>
      <div key={id} className={styles.shoesContainer}>
        <img src={image} alt={description} className={styles.image} />
        <div className={styles.containerParagraph}>
          <p className={styles.paragraphDescription}>{description}</p>
          <p>{formatCurrency(price)}</p>
        </div>
        <div className={styles.containerButton}>
          <Button
            variant="contained"
            onClick={() => handleAdd({ id, description, price, image })}
            startIcon={<ShoppingCart sx={{ color: "white" }} fontSize="small"/>}
            className={styles.buttonCart}
          >
            {cart.map((product) => {
              if(id === product.id){
                return <p key={product.id} className={styles.paragraphCart}>{product.quantity}</p>
              }
              return null;
            })
            }
            Adicionar ao Carrinho
          </Button>

        </div>
      </div>
    </>
  );
};
