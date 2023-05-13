import { configureStore } from '@reduxjs/toolkit';
import WaitlistReducer from './reducer/waitlist.slice';

const store = configureStore({
  reducer: {
    waitlist: WaitlistReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
