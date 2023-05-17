import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HttpService, APIResponse } from '../../utils/http/service';
import config from '../../utils/config';
export interface WaitlistState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface AddToWaitlistPayload {
  email: string;
  first_name: string;
  last_name: string;
}

const http: HttpService = new HttpService(config.QUIZARD_USERS_BASE_URL);

export const addToWaitlist = createAsyncThunk(
  'waitlist/add',
  async (payload: AddToWaitlistPayload, thunkAPI) => {
    try {
      await http.post<APIResponse>('/waitlist', payload);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message || error.message);
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
        state.error = null;
      })
      .addCase(addToWaitlist.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(addToWaitlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default waitlistSlice.reducer;
