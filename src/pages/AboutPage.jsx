const AboutPage = () => {
  return (
    <div className="about-page min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Hakkımızda</h1>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Biz Kimiz?</h2>
            <p className="text-gray-600 mb-6">
              Benim E-Ticaret olarak, 2024 yılından bu yana müşterilerimize en kaliteli ürünleri 
              en uygun fiyatlarla sunmaya devam ediyoruz. Müşteri memnuniyetini her zaman ön 
              planda tutarak, güvenilir alışveriş deneyimi sunmayı hedefliyoruz.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 mb-6">
              Teknoloji ve moda ürünlerini en uygun fiyatlarla müşterilerimize ulaştırarak, 
              herkesin kaliteli ürünlere erişimini sağlamak için çalışıyoruz. Sürdürülebilir 
              bir alışveriş deneyimi sunarak çevreye duyarlı bir yaklaşım benimsiyoruz.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Güvenilirlik</h3>
                <p className="text-gray-600">Müşterilerimizin güvenini kazanmak en önemli önceliğimizdir.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Kalite</h3>
                <p className="text-gray-600">En kaliteli ürünleri müşterilerimizle buluşturuyoruz.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Müşteri Odaklılık</h3>
                <p className="text-gray-600">Müşteri memnuniyeti bizim için her şeyden önemlidir.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">İletişim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Adres</h3>
                <p className="text-gray-600">
                  Atatürk Caddesi No: 123<br />
                  Kadıköy, İstanbul<br />
                  Türkiye
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">İletişim Bilgileri</h3>
                <p className="text-gray-600">
                  Telefon: +90 (212) 123 45 67<br />
                  E-posta: info@benimeticaret.com<br />
                  Çalışma Saatleri: 09:00 - 18:00
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;