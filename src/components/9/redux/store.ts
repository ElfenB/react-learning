import cartState from './features/cart';
import { configureStore } from '@reduxjs/toolkit';
import counterState from './features/counter';

export const store = configureStore({
  reducer: { cartState, counterState },
});

export type RootState = ReturnType<typeof store.getState>;
