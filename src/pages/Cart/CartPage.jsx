import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sepetBos = cartItems.length === 0;

  const miktarGuncelle = (urunId, yeniMiktar) => {
    if (yeniMiktar < 1) return;
    dispatch(updateQuantity({ id: urunId, quantity: yeniMiktar }));
  };

  const toplamTutar = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (sepetBos) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
              <FiShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sepetiniz Boş
            </h2>
            <p className="text-gray-600 mb-8">
              Sepetinizde ürün bulunmamaktadır. Alışverişe başlamak için ürünler
              sayfasını ziyaret edebilirsiniz.
            </p>
            <button
              onClick={() => navigate('/urunler')}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
            >
              Alışverişe Başla
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900">Alışveriş Sepeti</h1>
          <p className="text-gray-600 mt-2">
            Sepetinizde {cartItems.length} ürün bulunmaktadır
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ürün Listesi */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6"
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                variants={item}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-gray-100 rounded-xl flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            miktarGuncelle(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            miktarGuncelle(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-indigo-600">
                          {(item.price * item.quantity).toFixed(2)}₺
                        </span>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sipariş Özeti */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Sipariş Özeti
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Ara Toplam</span>
                  <span>{toplamTutar.toFixed(2)}₺</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>KDV (%18)</span>
                  <span>{(toplamTutar * 0.18).toFixed(2)}₺</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Kargo</span>
                  <span>Ücretsiz</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Toplam</span>
                  <span>{(toplamTutar * 1.18).toFixed(2)}₺</span>
                </div>

                <button
                  onClick={() => navigate('/odeme')}
                  className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Ödemeye Geç
                </button>

                <button
                  onClick={() => navigate('/urunler')}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Alışverişe Devam Et
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
