import { Link } from "react-router-dom";


function ProductItem({product}) {
  return (
    <div>
      <h2>
        <Link to={`/products/` + product.productId}>
          {product.title}
        </Link>
      </h2>
      <p>
        {product.description}
      </p>
    </div>
  );
}

export default ProductItem;