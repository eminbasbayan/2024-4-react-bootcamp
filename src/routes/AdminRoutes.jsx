import RequireRole from '../components/Auth/RequireRole';
import AdminLayout from '../layouts/AdminLayout';
import DashboardPage from '../pages/Admin/DashboardPage';
import ProductsPage from '../pages/Admin/ProductsPage';

const adminRoutes = [
  {
    path: '/admin',
    element: (
      <RequireRole allowedRoles={['admin', 'moderator']}>
        <AdminLayout />
      </RequireRole>
    ),
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
