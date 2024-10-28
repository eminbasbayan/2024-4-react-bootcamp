import { productsData } from "../../productsData";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        {productsData.map((product) => {
          return <ProductItem
            image={productsData[0].image}
            title={productsData[0].title}
            price={productsData[0].price}
          />;
        })}
      </div>
    </div>
  );
}

export default Products;
