import Button from '../../components/UI/Button';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, dispatch } = useCart();
  // Örnek veri
  const sepetBos = cartItems.length === 0;

  if (sepetBos) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Sepetiniz</h2>
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      </div>
    );
  }

  const miktarGuncelle = (urunId, yeniMiktar) => {
    if (yeniMiktar < 1) return;
    dispatch({
      type: 'MIKTAR_GUNCELLE',
      payload: { id: urunId, quantity: yeniMiktar },
    });
  };

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
                  onClick={() =>
                    dispatch({ type: 'SEPETTEN_CIKAR', id: item.id })
                  }
                >
                  Ürünü Sil
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3 className="text-xl font-bold">Toplam Tutar: 399.98₺</h3>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
