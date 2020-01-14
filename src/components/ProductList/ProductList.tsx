import React, { useState, useEffect } from "react";
import { Product } from "../../types";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

interface Props {
  products: Product[] | null;
  loading: boolean;
  onLikeProduct: (productId: number) => void;
  isLiked: (productId: number) => boolean;
}

const ProductList: React.FC<Props> = ({
  products,
  isLiked,
  onLikeProduct,
  loading
}) => {
  const [hideSold, setHideSold] = useState<boolean>(false);

  function onToggleHide(): void {
    if (hideSold) {
      setHideSold(false);
    } else {
      setHideSold(true);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.titleBox}>
        {!loading ? (
          <h3>{products ? `${products.length} Results` : "No Products"}</h3>
        ) : (
          <h3>Loading...</h3>
        )}
        <button className={styles.hideButton} onClick={onToggleHide}>
          {hideSold ? "Hide Sold Item" : "Show Sold Item"}
        </button>
      </div>
      <div className={styles.box}>
        {products &&
          products.length > 0 &&
          products.map((product: Product) => {
            if (hideSold && product.sold) {
              return undefined;
            }
            return (
              <ProductItem
                product={product}
                key={product.id}
                isLiked={isLiked}
                onLikedProduct={onLikeProduct}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProductList;
