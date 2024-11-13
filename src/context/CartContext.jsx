import { createContext, useContext, useReducer } from 'react';

import PropTypes from 'prop-types';

export const CartContext = createContext();

const cartReducer = () => {};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
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
