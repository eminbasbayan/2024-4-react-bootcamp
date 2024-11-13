import { useContext } from 'react';
import Products from './components/Products/Products';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header/Header';

function App() {
  const value = useContext(ThemeContext);

  console.log('app component', value);

  return (
    <div className="app">
      <div className="container mx-auto">
        <Header />
        <Products />
      </div>
    </div>
  );
}

export default App;
