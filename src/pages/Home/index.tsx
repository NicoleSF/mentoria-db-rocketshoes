import { useContext, useEffect, useState } from "react";
import { Shoes, ShoesProps } from "../../features/products/components/Shoes";
import { Header } from "../../layout/Header";
import styles from "./styles.module.scss";
import { CartContext } from "../../context/CartContex";
import { Link } from "@mui/material";

export const Home = () => {
  const [shoes, setShoes] = useState([]);

  const fetchShoesData = () => {
    fetch("http://localhost:3000/shoes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShoes(data);
      });
  };

  useEffect(() => {
    fetchShoesData();
  }, []);
  return (
    <div className={styles.containerHome}>
      <Header />
      <Link href="/login">Login</Link>
      <div className={styles.containerShoes}>
        {shoes.map((shoe: ShoesProps) => (
          <Shoes
            key={shoe.id}
            id={shoe.id}
            description={shoe.description}
            price={shoe.price}
            image={shoe.image}
          />
        ))}
      </div>
    </div>
  );
};
