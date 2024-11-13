import { createContext, useContext, useReducer } from 'react';

import PropTypes from 'prop-types';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SEPETE_EKLE':
      console.log('ürün sepete eklendi!');
      return { ...state, cartItems: [...state.cartItems, action.item] };
    case 'SEPETTEN_CIKAR':
      console.log('ürün sepetten çıkarıldı!');
      return state;
    case 'MIKTAR_GUNCELLE':
      console.log('ürün sepet miktarı güncellendi');
      return state;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart hook CartProvider içinde kullanılmalıdır!');
  }
  return context;
};
