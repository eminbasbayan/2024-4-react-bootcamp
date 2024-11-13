import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { logo } = useContext(ThemeContext);
  const sepetUrunSayisi = 0;

  return (
    <header className="header">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            {logo}
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
