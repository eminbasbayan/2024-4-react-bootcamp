import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);
  console.log(props.myName);
  console.log(props.image);
  console.log(props.title);
  console.log(props.price);

  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img className="product-image" src={props.image} alt="çanta" width={200} />
      </div>

      <div className="product-info">
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
