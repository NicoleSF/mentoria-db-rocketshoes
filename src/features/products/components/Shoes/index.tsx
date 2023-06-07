import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type ShoesProps = {
  id: number;
  description: string;
  price: number;
  image: string;
};

export const Shoes = ({ id, description, price, image }: ShoesProps) => {
  return (
    <>
      <div key={id} className={styles.shoesContainer}>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
};
