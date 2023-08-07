import RocketImg from "../../assets/Logo.svg";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.headerContainer}>
      <div>
        <Link to="/"><img src={RocketImg} alt="Imagem do logo da rocketshoes" className={styles.imgLogo}/></Link>
      </div>
      <div className={styles.shoppingCart}>
        <div className={styles.paragraphContainer}>
          <p>Meu carrinho</p>
          <p>{cart.length} itens</p>
        </div>
        <div>
          <Link to="/shopping-cart">
          <ShoppingCart
            sx={{ color: "white" }}
            fontSize="large"
          />
          </Link>
        </div>
      </div>
    </header>
  );
};
