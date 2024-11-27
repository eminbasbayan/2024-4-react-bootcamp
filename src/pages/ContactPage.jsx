import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/UI/Button';
import toast from 'react-hot-toast';

const contactSchema = yup.object().shape({
  isim: yup.string().required('İsim alanı zorunludur'),
  email: yup
    .string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta alanı zorunludur'),
  konu: yup.string().required('Konu alanı zorunludur'),
  mesaj: yup
    .string()
    .min(10, 'Mesaj en az 10 karakter olmalıdır')
    .required('Mesaj alanı zorunludur'),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Mesajınız başarıyla gönderildi!');
    reset();
  };

  return (
    <div className="contact-page min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">İletişim</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="contact-info">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  İletişim Bilgilerimiz
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <strong>Adres:</strong> Atatürk Caddesi No: 123,
                    Kadıköy/İstanbul
                  </p>
                  <p className="text-gray-600">
                    <strong>Telefon:</strong> +90 (212) 123 45 67
                  </p>
                  <p className="text-gray-600">
                    <strong>E-posta:</strong> info@benimeticaret.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 09:00 -
                    18:00
                  </p>
                </div>
              </div>

              <div className="social-media">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Sosyal Medya
                </h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    Twitter
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    Instagram
                  </a>
                  <a href="#" className="text-blue-800 hover:text-blue-900">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    İsim
                  </label>
                  <input
                    {...register('isim')}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Adınız Soyadınız"
                  />
                  {errors.isim && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.isim.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    {...register('email')}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Konu
                </label>
                <input
                  {...register('konu')}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Mesajınızın konusu"
                />
                {errors.konu && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.konu.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  {...register('mesaj')}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Mesajınızı buraya yazın..."
                />
                {errors.mesaj && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mesaj.message}
                  </p>
                )}
              </div>

              <Button color="primary" addClass="w-full">
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
