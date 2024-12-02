import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from '../../schemas/auth.schema';

import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(loginUser({ email, password }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Giriş Yap
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
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

            <div className="form-item flex items-center">
              <input
                type="checkbox"
                {...register('rememberMe')}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Beni Hatırla
              </label>
            </div>
          </div>
          <Button color="primary" addClass="w-full">
            Giriş Yap
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
