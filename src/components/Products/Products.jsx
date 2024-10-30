import { useState } from "react";
import { productsData } from "../../productsData";
import ProductItem from "./ProductItem";
import "./Products.css";

//! componentler state ve prop güncellendiğinde re-render olur!

function Products() {
  const [myTitle, setMyTitle] = useState("My Title");

  function handleClick(){
    setMyTitle("Yüzük")
  }

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              myTitle={myTitle}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
