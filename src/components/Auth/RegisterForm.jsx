import Button from "../UI/Button";

const RegisterForm = () => {
  return (
    <div className="register-form min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Kayıt Ol
        </h2>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="Ad Soyad"
              />
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="ornek@email.com"
              />
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="******"
              />
            </div>
            <div className="form-item">
              <label className="block text-sm font-medium text-gray-700">
                Şifre Tekrar
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                placeholder="******"
              />
            </div>
          </div>
          <Button color="primary" addClass="w-full">Kayıt Ol</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
