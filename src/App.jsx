import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header/Header';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const value = useContext(ThemeContext);

  console.log('app component', value);

  return (
    <div className="app">
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sepet" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
