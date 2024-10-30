import { useState } from "react";
import Button from "../UI/Button";
import "./AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  return (
    <form className="add-product-form">
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
      <Button color={"success"}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
