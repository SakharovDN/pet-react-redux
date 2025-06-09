import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/features/auth';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    authState: authReducer,
  },
});

export default store;
