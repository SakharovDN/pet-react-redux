import { getCreateThunk, initialQueryState, QueryState } from '@/shared/lib/redux';

import authService from '../api/auth.service';

const authQueries = ['login'] as const;

const createThunk = getCreateThunk<AuthQuery>('auth');

export const login = createThunk('login', authService.login);

export type AuthQueries = Record<AuthQuery, QueryState>;
export type AuthQuery = (typeof authQueries)[number];
export const initialAuthQueries: AuthQueries = authQueries.reduce((acc, query) => {
  acc[query] = initialQueryState;
  return acc;
}, {} as AuthQueries);
