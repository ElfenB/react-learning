import { configureStore } from '@reduxjs/toolkit';
import { timeTableApi } from './../12/Twelve.api';
import cartState from './features/cart/cart';
import { localStorageMiddleware } from './features/cart/cart.middleware';
import counterState from './features/counter/counter';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(timeTableApi.middleware).prepend(localStorageMiddleware.middleware),
  reducer: { cartState, counterState, [timeTableApi.reducerPath]: timeTableApi.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
