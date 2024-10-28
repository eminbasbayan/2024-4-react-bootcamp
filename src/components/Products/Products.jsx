import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        <ProductItem />
      </div>
    </div>
  );
}

export default Products;
