import { useState } from 'react';
import { productsData } from '../../productsData';
import AddProduct from './AddProduct';
import ProductItem from './ProductItem';
import Modal from '../UI/Modal';

function Products() {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setShowModal] = useState(false);

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
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
