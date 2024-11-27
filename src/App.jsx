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
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/Admin/DashboardPage';
import ProductsPage from './pages/Admin/ProductsPage';
import Page404 from './pages/404Page';

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
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

function App() {
  return (
    <div className="app">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
