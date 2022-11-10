import { CartItem } from './cart.types';
import { createSlice } from '@reduxjs/toolkit';
import { tempData } from './cart.tempdata';

type State = {
  cart: CartItem[];
};

const initialState: State = {
  cart: [...tempData],
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addItem(state, action: { payload: CartItem; type: string }) {
      if (state.cart.every((item) => item.productId !== action.payload.productId)) {
        state.cart.push(action.payload);
      }
      state.cart.map((item) =>
        item.productId !== action.payload.productId ? item : { ...item, amount: item.amount + 1 }
      );
    },
    decreaseAmountBy(state, action: { payload: { amount: number; productId: number }; type: string }) {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        amount: (cartItem.amount =
          cartItem.productId === action.payload.productId
            ? (cartItem.amount =
                action.payload.amount >= cartItem.amount ? 1 : (cartItem.amount -= action.payload.amount))
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
