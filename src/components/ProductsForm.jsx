import { useMutation } from "@tanstack/react-query";
import { postProducts } from "../api/productsApi";

export const ProductsForm = () => {
  const addProductMutation = useMutation({ mutationFn: postProducts });

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const formData = new FormData( e.target );
    const products = Object.fromEntries( formData );
    addProductMutation.mutate( products );
  };

  return (
    <form onSubmit={ handleSubmit } action="text">
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />
      <label htmlFor="price">price</label>
      <input type="number" name="price" id="price" />
      <button>Add</button>
    </form>
  );
};
