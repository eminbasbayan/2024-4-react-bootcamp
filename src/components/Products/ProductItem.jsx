import PropTypes from "prop-types";
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

      <div className="product-info">
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  myName: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.object.isRequired
};

export default ProductItem;
