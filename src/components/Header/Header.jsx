import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { currentUserRole } = useSelector((state) => state.role);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sepetUrunSayisi = cartItems.length;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="text-2xl font-bold z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            Benim E-Ticaret
          </Link>

          {/* Hamburger Menü Butonu */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden z-10 p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Ana menüyü aç/kapat"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </motion.button>

          {/* Mobil Menü */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 lg:hidden bg-white/95 backdrop-blur-md z-40"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                  <NavLink
                    to="/urunler"
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ürünler
                  </NavLink>
                  <NavLink
                    to="/hakkimizda"
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımızda
                  </NavLink>
                  <NavLink
                    to="/iletisim"
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    İletişim
                  </NavLink>
                  <NavLink
                    to="/sepet"
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
                        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
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
                    Sepet ({sepetUrunSayisi})
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/urunler"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Ürünler
            </NavLink>
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Hakkımızda
            </NavLink>
            <NavLink
              to="/iletisim"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              İletişim
            </NavLink>

            <NavLink
              to="/sepet"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              <div className="relative">
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
                {sepetUrunSayisi > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {sepetUrunSayisi}
                  </span>
                )}
              </div>
              <span>Sepet</span>
            </NavLink>

            {user ? (
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-gray-700">
                  Hoşgeldin, {user.displayName}
                </span>
                {currentUserRole === 'admin' && (
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 ${
                        isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                  >
                    Admin
                  </NavLink>
                )}
                <button
                  onClick={() => dispatch(logoutUser())}
                  className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-indigo-600 hover:bg-indigo-50'
                    }`
                  }
                >
                  Giriş Yap
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg bg-indigo-600 text-white transition-all duration-200 hover:bg-indigo-700 ${
                      isActive ? 'ring-2 ring-indigo-300' : ''
                    }`
                  }
                >
                  Kayıt Ol
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;