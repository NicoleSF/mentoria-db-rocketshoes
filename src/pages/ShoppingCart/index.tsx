import { useContext } from "react";
import styles from "./styles.module.scss";
import { CartContext } from "../../context/CartContex";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency } from "../../utils/formatCurrency";
import { useCallback } from "react"; 

export const ShoppingCart = () => {
  const { cart, handleAdd, setCart, handleRemoveItem } = useContext(CartContext);

  const valorTotal = cart.reduce((total, item) => total += (item.quantity * item.price), 0)

  const handleRemove = useCallback((id: number) => {
    const removeProduct = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(removeProduct)
  }, [cart, setCart])

  return (
    <>
    <div className={styles.box}>
    <div className={styles.containerShoppingCart}>
      <ul>
        <li className={styles.headerTable}>
          <h3 className={styles.textProductHeader}>PRODUTO</h3>
          <h3 className={styles.textHeader}>QTD</h3>
          <h3 className={styles.textHeader}>PREÇO</h3>
          <div className={styles.spacer}></div>
        </li>
        {cart.map((products) => (
          <li key={products.id} className={styles.liCartItem}>
            <img src={products.image} alt={products.description} className={styles.imgCarrinho}/>
            <div className={styles.description}>
              <p className={styles.textProduct}>{products.description}</p>
              <p className={styles.textPrice}>{formatCurrency(products.price)}</p>
              </div>
              <div className={styles.quantity}>
                <button className={styles.buttonChangeQuantity}><AddCircleOutlineIcon sx={{ color: "#333" }} onClick={() => handleAdd(products)}/></button>
                <p className={styles.textQuantity}>{products.quantity}</p>
                <button className={styles.buttonChangeQuantity}><RemoveCircleOutlineIcon sx={{ color: "#333" }} onClick={() => handleRemoveItem(products)}/></button>
              </div>
              <p className={styles.textPrice}>{formatCurrency(products.price)}</p>
              <button className={styles.remove} onClick={() => handleRemove(products.id)}><DeleteIcon/></button>
          </li>
        ))}
      </ul>
      <div className={styles.divEndRequest}>
        <Button variant="contained">Finalizar Pedido</Button>
        <div className={styles.divTextTotalValue}>
          <h3 className={styles.textTotal}>TOTAL</h3>
          <p className={styles.textValue}>{formatCurrency(valorTotal)}</p>
        </div>
      </div>
    </div>
    </div>


    </>
  );
};
