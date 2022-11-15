import { AnyAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Homework
export const useDispatchAction = (action: (params: any) => AnyAction, params: any) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(action(params)), [action, dispatch, params]);
};

export function useDispatchAction2<T = any>(action: (args: T) => AnyAction, args: T): () => void {
  const dispatchAction = useDispatchActionCallback(action);

  return useCallback(() => {
    dispatchAction(args);
  }, [dispatchAction, args]);
}

export function useDispatchActionCallback<T = any>(action: (args: T) => AnyAction): (args: T) => AnyAction {
  const dispatch = useDispatch();

  return useCallback((args: T) => dispatch(action(args)), [action, dispatch]);
}
