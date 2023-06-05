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
        <div>
          <p className={styles.paragraph}>Meu carrinho</p>
          <p className={styles.paragraph}>3 itens</p>
        </div>
        <div>
          <ShoppingCart sx={{ color: "white" }} />
        </div>
      </div>
    </header>
  );
};
