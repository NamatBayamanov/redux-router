import ProductItem from "./ProductItem/ProductItem";

function ProductList({products}) {
  const productItems = products.map(product => <ProductItem product={product} key={product.productId} />);
  return (
    <div>
      {productItems}
    </div>
  );
}

export default ProductList;