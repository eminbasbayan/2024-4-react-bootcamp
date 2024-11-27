import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './context/ThemeProvider';

import './index.css';
import { CartProvider } from './context/CartContext';
import AuthProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </AuthProvider>
);
