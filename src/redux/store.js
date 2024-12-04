import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import roleReducer from './slices/roleSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    role: roleReducer,
  },
});

export default store;
