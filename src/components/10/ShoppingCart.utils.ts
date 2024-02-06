import { useCallback } from 'react';
import type { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export function useDispatchAction2<T>(action: (args: T) => AnyAction, args: T): () => void {
  const dispatchAction = useDispatchActionCallback(action);

  return useCallback(() => {
    dispatchAction(args);
  }, [dispatchAction, args]);
}

export function useDispatchActionCallback<T>(action: (args: T) => AnyAction): (args: T) => AnyAction {
  const dispatch = useDispatch();

  return useCallback((args: T) => dispatch(action(args)), [action, dispatch]);
}
