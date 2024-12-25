import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiPackage } from 'react-icons/fi';

const AboutPage = () => {
  const stats = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      value: "10K+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      value: "5+",
      label: "Yıllık Tecrübe"
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      value: "50K+",
      label: "Başarılı Teslimat"
    }
  ];

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "CEO & Kurucu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Ayşe Demir",
      role: "Ürün Müdürü",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Mehmet Kaya",
      role: "Tasarım Direktörü",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2018 yılından beri müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmaya devam ediyoruz.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Misyonumuz
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Müşterilerimize en kaliteli ürünleri, en iyi fiyatlarla sunmak ve alışveriş deneyimlerini
              mükemmelleştirmek için sürekli çalışıyoruz. Müşteri memnuniyeti bizim için her şeyden önce gelir.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Teknoloji ve trendleri yakından takip ederek, müşterilerimize her zaman en yeni ve en iyi ürünleri
              sunmaya devam ediyoruz. Güvenilir alışveriş deneyimi ve hızlı teslimat ile müşterilerimizin güvenini
              kazanmaya devam ediyoruz.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;