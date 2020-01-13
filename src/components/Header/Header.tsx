import React from "react";
import styles from "./Header.module.scss";
import { Product } from "../../types";

interface Props {
  products: Product[] | null;
  listOfIds: number[];
}

const Header: React.FC<Props> = ({ products, listOfIds }) => {
  const likedProducts: Product[] | undefined = products?.filter(prod =>
    listOfIds.includes(prod.id)
  );

  return (
    <header className={styles.header}>
      <div>Dropdown</div>
      <div>
        {likedProducts &&
          likedProducts.length > 0 &&
          likedProducts.map(likedProd => <h4>likedProd.title</h4>)}
      </div>
    </header>
  );
};

export default Header;
