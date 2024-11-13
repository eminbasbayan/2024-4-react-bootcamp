import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  const sepetUrunSayisi = cartItems.length;

  console.log(cartItems);

  return (
    <header className="header">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            E-Ticaret
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="nav-link">
              Ürünler
            </Link>
            <Link to="/sepet" className="nav-link cart-link">
              Sepet ({sepetUrunSayisi})
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
