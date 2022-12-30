import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getProducts } from "../api/productsApi";

export const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <>...Loading</>;

  if (isError) return <>{error.message}</>;
  console.log(products);

  return products.map((product) => (
    <div key={product.id}>
      <ul>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
      </ul>
        <button>Delete</button>
        <input type="checkbox" />
        <label htmlFor="">Stock</label>
    </div>
  ));
};
