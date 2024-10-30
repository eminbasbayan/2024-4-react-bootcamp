import { useState } from "react";
import { productsData } from "../../productsData";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="products">
      <h2>Products</h2>
      <AddProduct
        products={products}
        setProducts={setProducts}
      />
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
