import AdminLayout from '../layouts/AdminLayout';
import DashboardPage from '../pages/Admin/DashboardPage';
import ProductsPage from '../pages/Admin/ProductsPage';

const adminRoutes = [
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
];

export default adminRoutes;
