import PropTypes from 'prop-types';
import Button from '../UI/Button';
import toast from 'react-hot-toast';
import './ProductItem.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductItem(props) {
  const { id, image, category, title, price, onDeleteItem } = props;
  const { onDeleteItem: deleteItem, ...item } = props;
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch({ type: 'SEPETE_EKLE', item });
    toast.success('Ürün sepete eklendi');
  };

  return (
    <div className="product-item">
      <div
        className="product-image-wrapper cursor-pointer"
        onClick={() => navigate(`/urun/${id}`)}
      >
        <img className="product-image" src={image} alt="çanta" width={200} />
      </div>
      <b className="product-category">{category}</b>
      <div className="product-info">
        <strong
          className="product-title line-2-clamp cursor-pointer"
          onClick={() => navigate(`/urun/${id}`)}
        >
          {title}
        </strong>
        <span className="product-price">{price}₺</span>
        <Button color="primary" onClick={handleAddToCart}>
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
