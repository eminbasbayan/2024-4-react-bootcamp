import { Link, NavLink, useNavigate } from 'react-router-dom';
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link cart-link text-blue-500'
                  : 'nav-link cart-link'
              }
            >
              Ürünler
            </NavLink>
            <NavLink
              to="/sepet"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link cart-link text-blue-500'
                  : 'nav-link cart-link'
              }
            >
              Sepet ({sepetUrunSayisi})
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
