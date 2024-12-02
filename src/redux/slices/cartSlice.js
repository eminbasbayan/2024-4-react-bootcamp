import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload: item }) => {
      const mevcutUrun = state.cartItems.find((cItem) => cItem.id === item.id);

      if (mevcutUrun) {
        state.cartItems = state.cartItems.map((cItem) => {
          if (cItem.id === item.id) {
            return { ...cItem, quantity: cItem.quantity + 1 };
          }
          return cItem;
        });
        return;
      }

      state.cartItems = [...state.cartItems, { ...item, quantity: 1 }];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
