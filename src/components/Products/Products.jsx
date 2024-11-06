import { useEffect, useReducer } from 'react';
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

function Products() {
  const [state, dispatch] = useReducer(productReducer, initialState);

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

  return (
    <div className="products p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <AddProduct
        products={state.products}
        setProducts={(newProduct) =>
          dispatch({ type: 'ADD_PRODUCT', payload: newProduct })
        }
        setShowModal={() => dispatch({ type: 'SHOW_MODAL' })}
      />
      {state.isShowModal && (
        <Modal
          setShowModal={() => dispatch({ type: 'HIDE_MODAL' })}
          title="Uyarı"
          desc="Input alanları boş geçilemez!"
        />
      )}
      <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {state.isLoading && (
          <p className="text-2xl font-bold">Ürünler Yükleniyor...</p>
        )}
        {state.products.map((product) => {
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
