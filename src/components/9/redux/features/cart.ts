import { CartItem } from './cart.types';
import { createSlice } from '@reduxjs/toolkit';

type State = {
  cart: CartItem[];
};

const initialState: State = { cart: [] };

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addItem(state, action: { payload: CartItem; type: string }) {
      state.cart.push(action.payload);
    },
    removeItem(state, action: { payload: number; type: string }) {
      state.cart.filter((cartItem) => cartItem.productId !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
