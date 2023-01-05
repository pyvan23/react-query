import "./App.css";
import { Products } from "./components/Products";
import { ProductsForm } from "./components/ProductsForm";
import { Queries } from "./components/Queries";
import { QueryCache } from 'react-query';


function App() {
  return (
    <>
     <QueryCache>
      <Queries/>
      <ProductsForm/>
      <Products />
    </QueryCache>
    </>
  );
}

export default App;
