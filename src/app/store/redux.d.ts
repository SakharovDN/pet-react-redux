import store from './index';

declare module '@reduxjs/toolkit' {
    type AppDispatch = typeof store.dispatch;
    type RootState = ReturnType<typeof store.getState>;
}
