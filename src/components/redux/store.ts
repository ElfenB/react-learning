import cartState from './features/cart/cart';
import { configureStore } from '@reduxjs/toolkit';
import counterState from './features/counter/counter';

export const store = configureStore({
  reducer: { cartState, counterState },
});

export type RootState = ReturnType<typeof store.getState>;
