import { lazy, Suspense } from 'react';
import RequireRole from '../components/Auth/RequireRole';
import AdminLayout from '../layouts/AdminLayout';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const DashboardPage = lazy(() => import('../pages/Admin/DashboardPage'));
const ProductsPage = lazy(() => import('../pages/Admin/ProductsPage'));

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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductsPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default adminRoutes;
