import memoize from 'lodash/memoize';
import type { CartItem } from './cart.types';

export const selectTotalAmount = memoize((cart: CartItem[]) =>
  cart.reduce((prevSum, cartItem) => prevSum + cartItem.price * cartItem.amount, 0),
);

export const selectTotalItems = memoize((cart: CartItem[]) =>
  cart.reduce((prevCount, cartItem) => prevCount + cartItem.amount, 0),
);

export const selectDistinctNumOfItems = memoize((cart: CartItem[]) => cart.length);
