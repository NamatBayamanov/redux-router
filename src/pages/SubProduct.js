import { useParams } from "react-router-dom";
import { getProducts } from "../data/data";

function SubProduct() {

  const param = useParams();
  console.log(param);

  const SubProducts = getProducts();

  let output = SubProducts.filter(item => {
    if(item.productId === param.ids) {
      return {...item};
    }
    else {
      return null;
    }
  });
  return (
    <div>
      {output.map(el => <div key={el.productId}>{el.description}</div>)}
    </div>
  );
}

export default SubProduct;