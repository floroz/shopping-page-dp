import React, { useState, useEffect } from "react";
import { Product } from "../types";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import useProduct from "../components/hooks/useProduct";

const App: React.FC = () => {
  const { products, loading } = useProduct();
  const [likedProductsIds, setLikedProductsIds] = useState<number[]>([]);

  function onLikeProduct(productId: number): void {
    if (likedProductsIds.includes(productId)) {
      // if the item is already liked, remove the like
      const newLikes = likedProductsIds.filter(id => id !== productId);
      setLikedProductsIds(newLikes);
    } else {
      // the item is not liked, add the like
      const newLikes = likedProductsIds.concat(productId);
      setLikedProductsIds(newLikes);
    }
  }

  function isLiked(productId: number): boolean {
    return likedProductsIds.includes(productId);
  }

  return (
    <>
      <Header
        products={products}
        listOfIds={likedProductsIds}
        onLikedProduct={onLikeProduct}
      />
      <main>
        <ProductList
          products={products}
          loading={loading}
          onLikeProduct={onLikeProduct}
          isLiked={isLiked}
        />
      </main>
    </>
  );
};

export default App;
