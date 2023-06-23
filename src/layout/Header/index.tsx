import RocketImg from "../../assets/Logo.svg";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

export const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={RocketImg} alt="Imagem do logo da rocketshoes" />
      </div>
      <div className={styles.shoppingCart}>
        <div className={styles.paragraphContainer}>
          <p>Meu carrinho</p>
          <p>{cart.length} itens</p>
        </div>
        <div>
          <ShoppingCart
            sx={{ color: "white" }}
            fontSize="large"
            onClick={() => navigate("/shopping-cart")}
          />
        </div>
      </div>
    </header>
  );
};
