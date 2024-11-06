import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import ProductItem from './ProductItem';
import Modal from '../UI/Modal';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModal, setShowModal] = useState(false);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  async function fetchData() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <AddProduct
        products={products}
        setProducts={setProducts}
        setShowModal={setShowModal}
      />
      {isShowModal && (
        <Modal
          setShowModal={setShowModal}
          title="Uyarı"
          desc="Input alanları boş geçilemez!"
        />
      )}
      <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading && (
          <p className="text-2xl font-bold">Ürünler Yükleniyor...</p>
        )}
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              onDeleteItem={handleDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
