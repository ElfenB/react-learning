import { createSlice } from '@reduxjs/toolkit';

const initialState = { amount: 1, count: 0 };

const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    decrement(state) {
      state.count = state.count - 1;
    },
    increment(state) {
      state.count = state.count + 1;
    },
    incrementByAmount(state) {
      state.count = state.count + state.amount;
    },
    reset(state) {
      state.count = initialState.count;
    },
    setAmount(state, action: { payload: number }) {
      state.amount = action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount, reset, setAmount } = counterSlice.actions;

export default counterSlice.reducer;
