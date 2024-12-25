import Products from '../components/Products/Products';
const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Tüm Ürünlerimiz</h1>
      <Products />
    </div>
  );
};
export default ProductsPage; 