import "./ProductItem.css";

function ProductItem() {
  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Çanta";
  const price = 500;

  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt="çanta" width={200} />
      </div>

      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
