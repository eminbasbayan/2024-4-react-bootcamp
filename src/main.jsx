import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './context/ThemeProvider';

import './index.css';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
