import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Kaliteli Ürünler',
      description: 'En kaliteli ürünleri sizler için özenle seçiyoruz.',
      icon: '✨'
    },
    {
      title: 'Hızlı Teslimat',
      description: 'Siparişleriniz aynı gün kargoya verilir.',
      icon: '🚚'
    },
    {
      title: 'Güvenli Ödeme',
      description: '256-bit SSL sertifikası ile güvenli alışveriş.',
      icon: '🔒'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Alışverişin En Keyifli Hali
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              En trend ürünler, en uygun fiyatlar ve benzersiz alışveriş deneyimi için doğru yerdesiniz.
            </p>
            <button
              onClick={() => navigate('/urunler')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Hemen Alışverişe Başla
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müşteri memnuniyeti odaklı hizmet anlayışımız ve kaliteli ürünlerimizle sizlere en iyi alışveriş deneyimini sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Özel Tekliflerimizi Kaçırmayın!
            </h2>
            <p className="text-xl mb-8 text-indigo-200">
              En yeni ürünler ve kampanyalardan ilk siz haberdar olun.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Abone Ol
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;