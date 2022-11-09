import { CartItem } from './cart.types';

export const selectTotalAmount = (cart: CartItem[]) => cart.reduce((prevSum, cartItem) => prevSum + cartItem.price, 0);

export const selectTotalItems = (cart: CartItem[]) =>
  cart.reduce((prevCount, cartItem) => prevCount + cartItem.amount, 0);
