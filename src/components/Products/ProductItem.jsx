import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={props.image}
          alt="çanta"
          width={200}
        />
      </div>
      <b className="product-category">{props.category}</b>
      <div className="product-info">
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.price}₺</span>
        <Button color="primary">
          <strong>Sepete Ekle</strong>
        </Button>
        <Button color="danger">Ürünü Sil</Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
};

export default ProductItem;
