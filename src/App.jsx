import "./App.css";
import { Products } from "./components/Products";
import { ProductsForm } from "./components/ProductsForm";
import { QuerieSearch } from "./components/QuerieSearch";
import { SearchForm } from "./components/SearchForm";



function App() {
  return (
    <>
     
      <QuerieSearch/>
      <SearchForm/>
      <ProductsForm/>
      <Products />
    
    </>
  );
}

export default App;
