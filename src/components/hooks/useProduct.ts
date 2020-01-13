import { useEffect, useState } from "react";
import { Product } from "../../types";

type ProductHook = {
  products: Product[] | null;
  loading: boolean;
};

function useProduct(): ProductHook {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts(): Promise<any> {
      const url = process.env.REACT_APP_PRODUCT_API;

      if (!url) {
        throw new Error("The API url is invalid or corrupt.");
      }

      try {
        setIsLoading(true);
        const res = await fetch(url);
        const products = await res.json();
        setIsLoading(false);
        setProducts(products);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchProducts().then();
  }, []);

  return { products, loading };
}

export default useProduct;
