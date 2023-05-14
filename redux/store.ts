import { configureStore } from '@reduxjs/toolkit';
import WaitlistReducer from './reducer/waitlist.slice';

const store = configureStore({
  reducer: {
    waitlist: WaitlistReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {waitlist: WaitlistReducer}
export type AppDispatch = typeof store.dispatch;

export default store;
