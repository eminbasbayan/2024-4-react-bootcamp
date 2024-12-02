import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button';

import { removeFromCart } from '../../redux/slices/cartSlice';

import './CartPage.css';


const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // Örnek veri
  const sepetBos = cartItems.length === 0;

  if (sepetBos) {
    return (
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sepetiniz</h2>
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      </div>
    );
  }

  const miktarGuncelle = (urunId, yeniMiktar) => {
    if (yeniMiktar < 1) return;
    dispatch();
  };

  const toplamTutar = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Sepetiniz</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">{item.price}₺</p>
                <div className="cart-item-quantity">
                  <Button
                    color="primary"
                    onClick={() => miktarGuncelle(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    color="primary"
                    onClick={() => miktarGuncelle(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  color="danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Ürünü Sil
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3 className="text-xl font-bold">
            Toplam Tutar: {toplamTutar.toFixed(2)}₺
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
