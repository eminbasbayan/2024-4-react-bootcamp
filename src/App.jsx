import { Toaster } from 'react-hot-toast';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: "/sepet",
    element: <CartPage />
  }
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
