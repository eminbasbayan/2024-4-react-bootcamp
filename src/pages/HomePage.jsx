import Header from '../components/Header/Header';
import Products from '../components/Products/Products';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
