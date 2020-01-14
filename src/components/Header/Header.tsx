import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Product } from "../../types";
import Like from "../../images/like";

interface Props {
  products: Product[] | null;
  listOfIds: number[];
  onLikedProduct: (productId: number) => void;
}

const Header: React.FC<Props> = ({ products, listOfIds, onLikedProduct }) => {
  const [showDropDown, setShowDropDrown] = useState<boolean>(false);

  const likedProducts: Product[] | undefined = products?.filter(prod =>
    listOfIds.includes(prod.id)
  );

  useEffect(() => {
    if (!listOfIds || listOfIds.length === 0) {
      setShowDropDrown(false);
    }
  }, [listOfIds]);

  return (
    <header className={styles.header}>
      <button
        className={`${styles.button} ${showDropDown ? `${styles.isOpen}` : ""}`}
        onClick={() => setShowDropDrown(isOpen => !isOpen)}
        disabled={listOfIds.length <= 0}
      >
        <Like />
        <span className={styles.likesNumber}>
          {listOfIds && listOfIds.length}
        </span>
      </button>
      {showDropDown && (
        <div className={styles.dropdown}>
          {likedProducts &&
            likedProducts.length > 0 &&
            likedProducts.map(likedProd => (
              <div className={styles.likesBox}>
                <p>{likedProd.title}</p>
                <button onClick={() => onLikedProduct(likedProd.id)}>X</button>
              </div>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;
