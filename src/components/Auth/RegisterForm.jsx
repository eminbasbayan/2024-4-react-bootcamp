import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../UI/Button';

const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Ad Soyad alanı zorunludur!')
    .min(3, 'Ad Soyad en az 3 karakter olmalıdır!'),
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email alanı zorunludur!'),
  password: yup
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır!')
    .required('Şifre alanı zorunludur!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor!')
    .required('Şifre tekrarı zorunludur!'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-form min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Kayıt Ol
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                {...register('fullName', { required: true })}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="Ad Soyad"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="ornek@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
              <input
                {...register('password', { required: true })}
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="******"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Şifre Tekrar
              </label>
              <input
                {...register('confirmPassword', { required: true })}
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="******"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <Button color="primary" addClass="w-full">
            Kayıt Ol
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
