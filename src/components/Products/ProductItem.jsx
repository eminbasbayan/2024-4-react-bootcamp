import PropTypes from 'prop-types';
import Button from '../UI/Button';
import './ProductItem.css';
import { useCart } from '../../context/CartContext';

function ProductItem(props) {
  const { id, image, category, title, price, onDeleteItem } = props;
  const { dispatch } = useCart();

  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt="çanta" width={200} />
      </div>
      <b className="product-category">{category}</b>
      <div className="product-info">
        <strong className="product-title line-2-clamp">{title}</strong>
        <span className="product-price">{price}₺</span>
        <Button
          color="primary"
          onClick={() => dispatch({ type: 'SEPETE_EKLE' })}
        >
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
