import Counter from '../components/Counter';
import Products from '../components/Products/Products';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container mx-auto px-4 py-8">
        <Counter />
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
