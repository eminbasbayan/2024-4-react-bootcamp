import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const [isFlipped, setIsFlipped] = useState(false);

  // Sepet tutarı hesaplamaları
  const araToplam = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const kdvOrani = 0.18;
  const kdvTutari = araToplam * kdvOrani;
  const toplamTutar = araToplam + kdvTutari;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2');
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada normalde ödeme işlemi yapılacak
    alert('Ödeme başarıyla tamamlandı!');
    navigate('/');
  };

  const handleCvvFocus = () => setIsFlipped(true);
  const handleCvvBlur = () => setIsFlipped(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Kredi Kartı Görselleştirmesi */}
        <div className={`relative h-48 mb-8 transition-transform duration-700 transform perspective-1000 ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute w-full h-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-2xl backface-hidden">
            <div className="h-12 w-16 mb-8 rounded bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-80"></div>
            <div className="space-y-2">
              <div className="text-2xl tracking-widest">
                {formData.cardNumber || '•••• •••• •••• ••••'}
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs opacity-75">Kart Sahibi</div>
                  <div className="uppercase">{formData.cardHolderName || 'AD SOYAD'}</div>
                </div>
                <div>
                  <div className="text-xs opacity-75">Son Kullanma</div>
                  <div>{formData.expiryDate || 'AA/YY'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full rounded-2xl bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white shadow-2xl backface-hidden rotate-y-180">
            <div className="w-full h-12 bg-black mt-8"></div>
            <div className="flex justify-end mt-4">
              <div className="bg-white text-gray-800 px-4 py-2 rounded">
                {formData.cvv || 'CVV'}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Ödeme Bilgileri
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Kart Üzerindeki İsim</label>
                <input
                  type="text"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Kart Numarası</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  maxLength="19"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Son Kullanma Tarihi</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="AA/YY"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                    maxLength="5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    onFocus={handleCvvFocus}
                    onBlur={handleCvvBlur}
                    placeholder="123"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Ara Toplam:</span>
                <span className="font-medium">{araToplam.toFixed(2)}₺</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">KDV (18%):</span>
                <span className="font-medium">{kdvTutari.toFixed(2)}₺</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-indigo-100 pt-3">
                <span>Toplam:</span>
                <span className="text-indigo-600">{toplamTutar.toFixed(2)}₺</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium text-lg shadow-lg"
            >
              Ödemeyi Tamamla
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage; 