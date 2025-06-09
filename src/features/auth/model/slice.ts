import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';

import { initialQueryState } from '@/shared/lib/redux';

import { AuthQueries, AuthQuery, initialAuthQueries, login } from './thunks';

interface AuthState {
  queries: AuthQueries;
}

const initialState: AuthState = {
  queries: initialAuthQueries,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetQueryState: (state, action: PayloadAction<AuthQuery>) => {
      state.queries[action.payload] = initialQueryState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(login), (state, action) => {
        console.log('isPending', action);
        const query = action.type.split('/')[1] as AuthQuery;
        state.queries[query] = {
          isLoading: true,
          isSuccess: false,
          error: undefined,
        };
      })
      .addMatcher(isFulfilled(login), (state, action) => {
        const query = action.type.split('/')[1] as AuthQuery;
        state.queries[query] = {
          isLoading: false,
          isSuccess: true,
          error: undefined,
        };
      })
      .addMatcher(isRejected(login), (state, action) => {
        const query = action.type.split('/')[1] as AuthQuery;
        state.queries[query] = {
          isLoading: false,
          isSuccess: false,
          error: action.payload,
        };
      });
  },
});

export default authSlice.reducer;
export const { resetQueryState } = authSlice.actions;
