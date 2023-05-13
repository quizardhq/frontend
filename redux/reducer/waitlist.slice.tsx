import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface WaitlistState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface AddToWaitlistPayload {
  email: string;
}

export const addToWaitlist = createAsyncThunk(
  'waitlist/add',
  async (payload: AddToWaitlistPayload, thunkAPI) => {
    try {
      const response = await axios.post('/api/waitlist', payload);
      return response.data; // If your backend API returns any data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const waitlistSlice = createSlice({
  name: 'waitlist',
  initialState: {
    status: 'idle',
    error: null,
  } as WaitlistState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWaitlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToWaitlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addToWaitlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default waitlistSlice.reducer;
