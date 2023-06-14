/* eslint-disable no-param-reassign */
// all actions must be dispayed

import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
// import routes from '../routes';
const routes = { example: 'exampleValue' };

const createChannel = createAsyncThunk(
  'channels/createChannel',
  async (channel) => {
    const { data } = await axios.post(routes.example, channel);
    return data;
  },
);

const renameChannel = createAsyncThunk(
  'channels/renameChannel',
  async (channel) => {
    const { data } = await axios.post(routes.example, channel);
    return data;
  },
);

const removeChannel = createAsyncThunk(
  'channels/removeChannel',
  async ({ id }) => {
    await axios.post(routes.example, id);
    return id;
  },
);

const setActiveChannel = createAsyncThunk(
  'channel/setActiveChannel',
  async ({ id }) => {
    await axios.post(routes.example, id);
    return id;
  },
);

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState({ loadingStatus: 'idle', error: null, currentChannelId: null }),
  reducers: {
    addChannels: channelsAdapter.addMany,
    addCurrentChannelId: (state, { payload: { currentChannelId } }) => {
      state.currentChannelId = currentChannelId;
    },
  },
  extraReducers: {
    [createChannel.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    },
    [createChannel.rejected]: (state, { error }) => {
      state.loadingStatus = 'failed';
      state.error = error;
    },
    [createChannel.fulfilled]: (state, action) => {
      state.loadingStatus = 'idle';
      state.error = null;
      channelsAdapter.addOne(state, action);
    },
    [renameChannel.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    },
    [renameChannel.rejected]: (state, { error }) => {
      state.loadingStatus = 'failed';
      state.error = error;
    },
    [renameChannel.fulfilled]: (state, action) => {
      state.loadingStatus = 'idle';
      state.error = null;
      channelsAdapter.updateOne(state, action);
    },
    [removeChannel.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    },
    [removeChannel.rejected]: (state, { error }) => {
      state.loadingStatus = 'failed';
      state.error = error;
    },
    [removeChannel.fulfilled]: (state, { payload: { id } }) => {
      state.loadingStatus = 'idle';
      state.error = null;
      channelsAdapter.removeOne(id);
    },
    [setActiveChannel.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    },
    [setActiveChannel.rejected]: (state, { error }) => {
      state.loadingStatus = 'failed';
      state.error = error;
    },
    [setActiveChannel.fulfilled]: (state, { payload: { id } }) => {
      state.loadingStatus = 'idle';
      state.error = null;
      state.currentChannelId = id;
    },
  },
});

export const { actions } = channelsSlice;
export { createChannel, renameChannel, removeChannel };
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
