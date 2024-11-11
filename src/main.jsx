import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './context/ThemeProvider';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
