import { useEffect } from 'react';

import {
  ActionCreatorWithPreparedPayload,
  createListenerMiddleware,
  isAnyOf,
  PayloadAction,
  UnknownAction,
} from '@reduxjs/toolkit';

export const listenerMiddleware = createListenerMiddleware();

export function useActionListener<Args extends unknown[], P, T extends string = string, E = never, M = never>(
  effect: (action: PayloadAction<P, T, M, E>) => void,
  actionCreator: ActionCreatorWithPreparedPayload<Args, P, T, E, M>
): void;
export function useActionListener(
  effect: (action: UnknownAction) => void,
  actionCreators: ActionCreatorWithPreparedPayload<any[], any>[]
): void;
export function useActionListener(
  effect: (action: any) => void,
  actionCreatorOrCreators: ActionCreatorWithPreparedPayload<any[], any> | ActionCreatorWithPreparedPayload<any[], any>[]
): void {
  useEffect(() => {
    if (Array.isArray(actionCreatorOrCreators)) {
      return listenerMiddleware.startListening({
        effect,
        matcher: isAnyOf(...actionCreatorOrCreators),
      });
    }
    return listenerMiddleware.startListening({
      actionCreator: actionCreatorOrCreators,
      effect,
    });
  }, [effect]);
}
