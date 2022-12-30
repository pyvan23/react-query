import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
    const resp =   await productsApi.get("/products");

    return resp.data
};
