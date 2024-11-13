import { createContext, useContext, useReducer } from 'react';

import PropTypes from 'prop-types';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SEPETE_EKLE':
      const mevcutUrun = state.cartItems.find(
        (cItem) => cItem.id === action.item.id
      );

      if (mevcutUrun) {
        return {
          ...state,
          cartItems: state.cartItems.map((cItem) => {
            if (cItem.id === action.item.id) {
              return { ...cItem, quantity: cItem.quantity + 1 };
            }
            return cItem;
          }),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
      };
    case 'SEPETTEN_CIKAR':
      return {
        ...state,
        cartItems: state.cartItems.filter((cItem) => cItem.id !== action.id),
      };
    case 'MIKTAR_GUNCELLE':
      return {
        ...state,
        cartItems: state.cartItems.map((cItem) => {
          if (cItem.id === action.payload.id) {
            return { ...cItem, quantity: action.payload.quantity };
          }
          return cItem;
        }),
      };

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
