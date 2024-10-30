import { useState } from "react";
import Button from "../UI/Button";
import "./AddProduct.css";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  return (
    <form className="add-product-form">
      {title}
      <br />
      {price}
      <br />
      {image}
      <label>
        Title:
        <input type="text" onChange={handleTitleChange} />
      </label>
      <label>
        Price:
        <input type="number" onChange={handlePriceChange} />
      </label>
      <label>
        Image URL:
        <input type="text" onChange={handleImageChange} />
      </label>
      <Button color={"success"}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
