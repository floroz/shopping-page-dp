import React from "react";
import { Product } from "../../types";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

interface Props {
  products: Product[] | null;
  loading: boolean;
  onLikeProduct: (productId: number) => void;
  isLiked: (productId: number) => boolean;
}

const ProductList: React.FC<Props> = ({ products, isLiked, onLikeProduct }) => {
  return (
    <section className={styles.section}>
      {products &&
        products.length > 0 &&
        products.map(
          (product: Product): JSX.Element => (
            <ProductItem
              product={product}
              key={product.id}
              isLiked={isLiked}
              onLikedProduct={onLikeProduct}
            />
          )
        )}
    </section>
  );
};

export default ProductList;
