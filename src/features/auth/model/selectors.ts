import { createSelector, RootState } from '@reduxjs/toolkit';

import { AuthQuery } from './thunks';

const selectAuthState = (state: RootState) => state.authState;

export const selectQueryState = createSelector(
  [selectAuthState, (_, query: AuthQuery) => query],
  (state, query) => state.queries[query]
);
