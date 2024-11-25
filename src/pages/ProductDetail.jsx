import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Button from '../components/UI/Button';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [productId]);

  if (!product) return null;

  return (
    <div className="product-detail min-h-screen bg-gray-50">
      <Header />
      <p className="text-center text-2xl font-bold">{productId}</p>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Ürün Görseli */}
            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: '500px' }}
              />
            </div>

            {/* Ürün Bilgileri */}
            <div className="product-info space-y-4">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>

              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating.rate)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.rating.count} değerlendirme)
                </span>
              </div>

              <div className="text-3xl font-bold text-gray-900">
                {product.price}₺
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4 pt-4">
                <Button
                  color="primary"
                  onClick={() => {}}
                  addClass="w-full py-3 text-lg"
                >
                  Sepete Ekle
                </Button>
              </div>

              {/* Ürün Özellikleri */}
              <div className="border-t pt-4 mt-6">
                <h3 className="text-lg font-semibold mb-3">Ürün Özellikleri</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Hafif ve nefes alabilen kumaş</li>
                  <li>✓ Slim-fit kesim</li>
                  <li>✓ Üç düğmeli yaka detayı</li>
                  <li>✓ Kontrast raglan uzun kollu</li>
                  <li>✓ Dayanıklı dikiş detayları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
