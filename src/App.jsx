import "./App.css";
import { Products } from "./components/Products";
import { ProductsForm } from "./components/ProductsForm";
import { Queries } from "./components/Queries";

function App() {
  return (
    <>
      <Queries/>
      <ProductsForm/>
      <Products />
    </>
  );
}

export default App;
