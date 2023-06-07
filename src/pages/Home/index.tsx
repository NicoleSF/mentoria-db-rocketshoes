import { useEffect, useState } from "react";
import { Shoes } from "../../features/products/components/Shoes";
import { Header } from "../../layout/Header";
import styles from "./styles.module.scss";

type ShoesProps = {
  id: number;
  description: string;
  price: number;
  image: string;
};

export const Home = () => {
  const [shoes, setShoes] = useState([]);

  const fetchShoesData = () => {
    fetch("http://localhost:3000/shoes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShoes(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchShoesData();
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.container}>
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
