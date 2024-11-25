import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  const sepetUrunSayisi = cartItems.length;
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Benim E-Ticaret
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="/"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Ürünler
            </a>
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
