
import { createSlice } from '@reduxjs/toolkit';
import { getJsonFromLocalStorage } from './../../../8/TenziesGame.utils';
import { mockData } from './cart.mockData';
import { CartItem, Product } from './cart.types';

type State = {
  cart: CartItem[];
  products: Product[];
};

const initialState: State = {
  cart: getJsonFromLocalStorage('cart', []),
  products: mockData.products,
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addItem(state, action: { payload: { amount: number; product: Product }; type: string }) {
      const product = action.payload.product;
      const amount = action.payload.amount > 0 ? action.payload.amount : 1;

      if (state.cart.every((item) => item.productId !== product.productId)) {
        const newCartItem: CartItem = { ...product, amount };
        state.cart.push(newCartItem);
      } else {
        state.cart.map((item) =>
          item.productId !== product.productId ? item : { ...item, amount: (item.amount = item.amount + amount) },
        );
      }
    },
    decreaseAmountBy(state, action: { payload: { amount: number; productId: number }; type: string }) {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        amount: (cartItem.amount =
          cartItem.productId === action.payload.productId
            ? (cartItem.amount =
                action.payload.amount >= cartItem.amount ? 1 : (cartItem.amount = cartItem.amount - action.payload.amount))
            : cartItem.amount),
      }));
    },
    emptyCart(state) {
      state.cart = [];
    },
    increaseAmountBy(state, action: { payload: { amount: number; productId: number }; type: string }) {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        amount: (cartItem.amount =
          cartItem.productId === action.payload.productId
            ? (cartItem.amount = cartItem.amount + action.payload.amount)
            : cartItem.amount),
      }));
    },
    removeItem(state, action: { payload: number; type: string }) {
      state.cart = state.cart.filter((cartItem) => cartItem.productId !== action.payload);
    },
  },
});

export const { addItem, decreaseAmountBy, emptyCart, increaseAmountBy, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
