import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/data";

function Products() {
  return ( 
    <div>
      <ProductList products={getProducts()}/>
    </div>
  );
}

export default Products;