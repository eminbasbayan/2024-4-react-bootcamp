import { productsData } from "../../productsData";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        {productsData.map((product, index) => {
          return (
            <ProductItem
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
