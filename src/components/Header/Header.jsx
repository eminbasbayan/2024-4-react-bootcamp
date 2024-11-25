import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  const sepetUrunSayisi = cartItems.length;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold z-10">
            Benim E-Ticaret
          </Link>

          {/* Hamburger Menü Butonu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-10 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Ana menüyü aç/kapat"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobil Menü */}
          <div
            className={`fixed inset-0 lg:hidden bg-white z-0 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </NavLink>
              <NavLink
                to="/hakkimizda"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </NavLink>
              <NavLink
                to="/iletisim"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </NavLink>
              <NavLink
                to="/sepet"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Sepet ({sepetUrunSayisi})
              </NavLink>
            </div>
          </div>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link text-blue-500'
                  : 'nav-link text-gray-700 hover:text-blue-500'
              }
            >
              Ürünler
            </NavLink>
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link text-blue-500'
                  : 'nav-link text-gray-700 hover:text-blue-500'
              }
            >
              Hakkımızda
            </NavLink>
            <NavLink
              to="/iletisim"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link text-blue-500'
                  : 'nav-link text-gray-700 hover:text-blue-500'
              }
            >
              İletişim
            </NavLink>
            <NavLink
              to="/sepet"
              className={({ isActive }) =>
                `nav-link flex items-center gap-2 ${
                  isActive
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-blue-500'
                }`
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Sepet ({sepetUrunSayisi})</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
