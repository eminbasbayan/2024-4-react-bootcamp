import { useEffect, useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiPlus } from 'react-icons/fi';
import AddProduct from './AddProduct';
import ProductItem from './ProductItem';
import Modal from '../UI/Modal';

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    case 'SHOW_MODAL':
      return { ...state, isShowModal: true };
    case 'HIDE_MODAL':
      return { ...state, isShowModal: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'LOADING_COMPLETE':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isLoading: true,
  isShowModal: false,
};

const categories = [
  "Tüm Ürünler",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];

function Products() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [selectedCategory, setSelectedCategory] = useState("Tüm Ürünler");
  const [sortBy, setSortBy] = useState("default");
  const [showAddForm, setShowAddForm] = useState(false);

  function handleDeleteItem(productId) {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  }

  async function fetchData() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: 'LOADING_COMPLETE' });
    }
  }

  useEffect(() => {
    dispatch({ type: 'DELETE_PRODUCT' });
    fetchData();
  }, []);

  const filteredProducts = state.products
    .filter(product => selectedCategory === "Tüm Ürünler" ? true : product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Sol Taraf - Filtreler */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative group flex-1 min-w-[200px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FiFilter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative group flex-1 min-w-[200px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
                >
                  <option value="default">Varsayılan Sıralama</option>
                  <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                  <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
                  <option value="name-asc">İsim (A-Z)</option>
                  <option value="name-desc">İsim (Z-A)</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Ürün Ekleme */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="inline-flex items-center px-4 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              >
                <FiPlus className="h-5 w-5 mr-2" />
                Yeni Ürün Ekle
              </button>
            </div>
          </div>

          {/* Ürün Ekleme Formu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showAddForm ? 'auto' : 0, opacity: showAddForm ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {showAddForm && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <AddProduct
                  products={state.products}
                  setProducts={(newProduct) =>
                    dispatch({ type: 'ADD_PRODUCT', payload: newProduct })
                  }
                  setShowModal={() => dispatch({ type: 'SHOW_MODAL' })}
                />
              </div>
            )}
          </motion.div>
        </div>

        {state.isShowModal && (
          <Modal
            setShowModal={() => dispatch({ type: 'HIDE_MODAL' })}
            title="Uyarı"
            desc="Input alanları boş geçilemez!"
          />
        )}

        {state.isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </motion.div>
        )}

        {!state.isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">Ürün Bulunamadı</h3>
            <p className="mt-2 text-sm text-gray-500">
              Seçili kategoride ürün bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;