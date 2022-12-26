import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

const getProducts = async () => {
    const res =   await productsApi.get("/products");
    return resp.data
};
