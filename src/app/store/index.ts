import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {},
});

export default store;
