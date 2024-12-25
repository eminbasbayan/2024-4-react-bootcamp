import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import ThemeProvider from './context/ThemeProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import { CartProvider } from './context/CartContext';
import AuthProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider>
      <CartProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CartProvider>
    </ThemeProvider>
  </AuthProvider>
);
