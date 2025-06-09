export interface QueryState {
  isLoading: boolean;
  isSuccess: boolean;
  error?: any;
}

export const initialQueryState: QueryState = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};
