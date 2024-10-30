import { useState } from "react";
import { productsData } from "../../productsData";
import ProductItem from "./ProductItem";
import "./Products.css";
import Button from "../UI/Button";

//! componentler state ve prop güncellendiğinde re-render olur!

function Products() {


  return (
    <div className="products">
      <h2>Products</h2>
      <Button title="Yeni Ürün Ekle" color={"success"} size="lg" />
      <div className="products-wrapper">
        {productsData.map((product) => {
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
