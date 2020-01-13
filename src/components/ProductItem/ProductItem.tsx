import React from "react";
import { Product } from "../../types";
import styles from "./ProductItem.module.scss";
import Like from "../../images/like";

interface Props {
  product: Product;
  isLiked: (id: number) => boolean;
  onLikedProduct: (productId: number) => void;
}

const Backdrop = () => <div className={styles.backdrop}></div>;

const ProductItem: React.FC<Props> = ({ product, isLiked, onLikedProduct }) => {
  return (
    <div className={styles.card}>
      <button
        className={`${styles.like} ${
          isLiked(product.id) ? styles.isLiked : ""
        }`}
        onClick={() => onLikedProduct(product.id)}
      >
        <Like />
      </button>
      <figure className={styles.image}>
        <img src={product.img} alt={product.description} />
        {product.sold && (
          <>
            <Backdrop />
            <p className={styles.sold}>SOLD</p>
          </>
        )}
      </figure>
      <h4 className={styles.title}>{product.title}</h4>
      <p className={styles.brand}>{product.brand}</p>
      <p className={styles.size}>{product.size}</p>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductItem;
