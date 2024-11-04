import PropTypes from 'prop-types';
import Button from '../UI/Button';
import './ProductItem.css';

function ProductItem(props) {
  const { id, image, category, title, price, onDeleteItem } = props;
  
  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt="çanta" width={200} />
      </div>
      <b className="product-category">{category}</b>
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <Button color="primary">
          <strong>Sepete Ekle</strong>
        </Button>
        <Button color="danger" onClick={() => onDeleteItem(id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  onDeleteItem: PropTypes.func,
};

export default ProductItem;
