import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import WaitlistReducer from './reducer/waitlist.slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      waitlist: WaitlistReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore);
