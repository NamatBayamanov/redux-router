import { useParams, Link } from "react-router-dom";
import { getProduct, getProducts } from "../../../data/data";




function Product() {

  const params = useParams();

  console.log(params)



  const products = getProducts();

  let output = products.filter(item => {
    if(item.productId === params.id) {
      return {...item};
    }
    else {
      return null;
    }
  });

  // const output = product.map(item => <li>{item.description}</li>);

  return ( 
    <div>
      {output.map(el => <div key={el.productId}> <h2><Link to={`/products/product/${el.productId}`} >{el.title}</Link></h2> <p>{el.description}</p></div>)}
    </div>
  );
}

export default Product;