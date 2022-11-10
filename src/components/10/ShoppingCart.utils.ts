import { AnyAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Homework
export const useDispatchAction = (action: (params: any) => AnyAction, params: any) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(action(params)), [action, dispatch, params]);
};
