/* eslint-disable no-param-reassign */
// actions without dispaying

import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
// import routes from '../routes';
const routes = { example: 'exampleValue' };

const createMessage = createAsyncThunk(
  'messages/createMessage',
  async (message) => {
    const response = await axios.get(routes.example, message);
    return response.data;
  },
);

const messagesAdapter = createEntityAdapter();

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState({ loadingStatus: 'idle', error: null }),
  reducers: {
    addMessages: messagesAdapter.addMany,
  },
  extraReducers: {
    [createMessage.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    },
    [createMessage.rejected]: (state, { error }) => {
      state.loadingStatus = 'failed';
      state.error = error;
    },
    [createMessage.fulfilled]: (state, action) => {
      state.loadingStatus = 'idle';
      state.error = null;
      messagesAdapter.addOne(state, action);
    },
  },
});

export const { actions } = messagesSlice;
export { createMessage };
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
