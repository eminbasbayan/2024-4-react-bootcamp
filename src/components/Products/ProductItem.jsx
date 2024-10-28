import "./ProductItem.css";

function ProductItem() {
  return (
    <div
      className="product-item"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="çanta"
          width={200}
        />
      </div>

      <div className="product-info">
        <strong className="product-title">Çanta</strong>
        <span className="product-price">500₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
