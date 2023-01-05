import "./App.css";
import { Products } from "./components/Products";
import { ProductsForm } from "./components/ProductsForm";
import { QueryCache } from 'react-query';
import { QuerieSearch } from "./components/QuerieSearch";



function App() {
  return (
    <>
     <QueryCache>
      <QuerieSearch/>
      <ProductsForm/>
      <Products />
    </QueryCache>
    </>
  );
}

export default App;
