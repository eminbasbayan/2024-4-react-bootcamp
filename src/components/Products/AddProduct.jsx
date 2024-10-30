import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./AddProduct.css";

function AddProduct({ products, setProducts }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      id: Math.random(),
      ...product,
      price: Number(product.price),
    };
    setProducts([newProduct, ...products]);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" onChange={handleChange} />
      </label>
      <Button color={"success"}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;

AddProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
