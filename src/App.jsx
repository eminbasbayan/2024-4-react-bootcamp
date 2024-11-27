import { Toaster } from 'react-hot-toast';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sepet',
        element: <CartPage />,
      },
      {
        path: '/hakkimizda',
        element: <AboutPage />,
      },
      {
        path: '/iletisim',
        element: <ContactPage />,
      },
      {
        path: '/urun/:productId',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container mx-auto">
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
