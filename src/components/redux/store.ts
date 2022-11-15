import cartState from './features/cart/cart';
import { configureStore } from '@reduxjs/toolkit';
import counterState from './features/counter/counter';
import { localStorageMiddleware } from './features/cart/cart.middleware';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
  reducer: { cartState, counterState },
});

export type RootState = ReturnType<typeof store.getState>;
