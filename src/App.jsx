import "./App.css";
import { Products } from "./components/Products";
import { ProductsForm } from "./components/ProductsForm";

function App() {
  return (
    <>
      <h1>React Query!</h1>
      <ProductsForm/>
      <Products />
    </>
  );
}

export default App;
