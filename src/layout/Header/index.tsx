import RocketImg from "../../assets/Logo.svg";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={RocketImg} alt="Imagem do logo da rocketshoes" />
      </div>
      <div className={styles.shoppingCart}>
        <div className={styles.paragraphContainer}>
          <p>Meu carrinho</p>
          <p>3 itens</p>
        </div>
        <div>
          <ShoppingCart sx={{ color: "white" }} />
        </div>
      </div>
    </header>
  );
};
