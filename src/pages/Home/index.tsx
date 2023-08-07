import { useEffect, useState } from "react";
import { Shoes} from "../../features/products/components/Shoes";

import styles from "./styles.module.scss";

import { Product } from "../../types/Produto";

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
      <div className={styles.containerShoes}>
        {shoes.map((shoe: Product) => (
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
