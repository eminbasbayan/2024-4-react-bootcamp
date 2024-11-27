import { createBrowserRouter } from 'react-router-dom';
import Page404 from '../pages/404Page';

import mainRoutes from './MainRoutes';
import authRoutes from './AuthRoutes';
import adminRoutes from './AdminRoutes';

const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  ...adminRoutes,
  {
    path: '*',
    element: <Page404 />,
  },
]);

export default router;
