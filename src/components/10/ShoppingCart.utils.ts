import { AnyAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

type Params = {
  amount: number;
  productId: number;
};

// Homework
export const useDispatchAction = (action: (params: Params) => AnyAction, params: Params) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(action(params)), [params, dispatch, action]);
};
