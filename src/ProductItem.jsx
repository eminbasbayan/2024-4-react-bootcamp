function ProductItem() {
  return (
    <div className="product-item">
      <img
        className="product-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="çanta"
        width={200}
      />
      <br />
      <strong className="product-title">Çanta</strong>
      <br />
      <span className="product-price">500₺</span>
    </div>
  );
}

export default ProductItem;
