import { FilterableProduct } from "./app/FilterableProduct";
import ProductTableList from "./app/ProductTableListe";
import { PRODUCTS } from "./data/products";


function App() {
  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-center">
            TP : Liste des produits & Filtre
          </h1>
        </div>
        <div className="card-body">
          <FilterableProduct products={PRODUCTS} />
        </div>
      </div>
    </div>
  );
}

export default App;
