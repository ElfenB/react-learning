import { CartItem } from './cart.types';
import { createSlice } from '@reduxjs/toolkit';

type State = {
  cart: CartItem[];
};

const initialState: State = {
  cart: [
    {
      amount: 1,
      price: 10.5,
      productId: 815,
      title: 'Headphones',
    },
    {
      amount: 2,
      price: 23.99,
      productId: 874,
      title: 'iPhone 12 Case',
    },
  ],
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addItem(state, action: { payload: CartItem; type: string }) {
      state.cart.push(action.payload);
    },
    decreaseAmountBy(state, action: { payload: { amount: number; productId: number }; type: string }) {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        amount: (cartItem.amount =
          cartItem.productId === action.payload.productId
            ? (cartItem.amount -= action.payload.amount)
            : cartItem.amount),
      }));
    },
    increaseAmountBy(state, action: { payload: { amount: number; productId: number }; type: string }) {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        amount: (cartItem.amount =
          cartItem.productId === action.payload.productId
            ? (cartItem.amount += action.payload.amount)
            : cartItem.amount),
      }));
    },
    removeItem(state, action: { payload: number; type: string }) {
      state.cart = state.cart.filter((cartItem) => cartItem.productId !== action.payload);
    },
  },
});

export const { addItem, decreaseAmountBy, increaseAmountBy, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
