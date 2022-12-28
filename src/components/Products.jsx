import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getProducts } from "../api/productsApi";

export const Products = () => {
    const {
        isLoading,
        data: products,
        isError,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    if (isLoading) return  <>...Loading</>;        
    
    
    if (isError) return <>{error.message}</>;
    console.log(products);
    

    return products.map((product) => (
        <React.Fragment key={product.id}>
            <ul>
                <li >{product.name}</li>
            </ul>
        </React.Fragment>
    ));
};
