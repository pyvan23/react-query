import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProducts, getProducts } from "../api/productsApi";

export const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error, } = useQuery({
      //consulta al backend
      queryKey: ["products"],
      queryFn: getProducts,
      //modificar los datos,ordenarlos
      select: productsArray => productsArray.sort((a, b) => b.id - a.id)
    });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => {
      //invalida el get anterior, compara y agrega los nuevos productos
      queryClient.invalidateQueries('products')
      console.log('el producto se elimino')
    }

  })

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
      <button onClick={() => deleteMutation.mutate(product.id)}>Delete</button>
      <input type="checkbox" />
      <label htmlFor="">Stock</label>
    </div>
  ));
};
