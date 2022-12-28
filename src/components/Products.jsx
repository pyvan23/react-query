import { useQuery } from "@tanstack/react-query";

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
        <>
            <ul>
                <li key={product.id}>{product.name}</li>
            </ul>
        </>
    ));
};
