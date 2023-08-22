import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import { RootState } from './../../store';
import { addItem, decreaseAmountBy, increaseAmountBy, removeItem } from './cart';

export const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  // actionCreator: increaseAmountBy,
  effect: (action, listenerApi) => {
    localStorage.setItem('cart', JSON.stringify((listenerApi.getState() as RootState).cartState.cart));
  },
  matcher: isAnyOf(addItem, decreaseAmountBy, increaseAmountBy, removeItem),
});
