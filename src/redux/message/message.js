/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMessage from './fetchMessage';

export const getMessage = createAsyncThunk('message/getMessage', async () => {
  const message = await fetchMessage();
  return message;
});

const messagesSlice = createSlice({
  name: 'message',
  initialState: {
    message: '',
    status: null,
  },
  extraReducers: {
    [getMessage.pending]: (state) => {
      state.status = 'loading';
    },
    [getMessage.fulfilled]: (state, { payload }) => {
      state.message = payload;
      state.status = 'success';
    },
    [getMessage.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default messagesSlice.reducer;
