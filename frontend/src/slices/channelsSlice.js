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
    return data; // ?????????????????? Must the response be normalized from back-end or not?
  },
);

const renameChannel = createAsyncThunk(
  'channels/renameChannel',
  async (channel) => {
    const { data } = await axios.post(routes.example, channel);
    return data; // ?????????????????? Must the response be normalized from back-end or not?
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
  initialState: channelsAdapter.getInitialState({
    loadingStatus: { type: null, status: null },
    currentChannelId: null,
    error: null,
  }),
  reducers: {
    addChannels: channelsAdapter.addMany,
    addCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
  extraReducers: {
    [createChannel.pending]: (state) => {
      state.loadingStatus = { type: 'creating', status: 'pending' };
      state.error = null;
    },
    [createChannel.rejected]: (state, { error }) => {
      state.loadingStatus = { type: 'creating', status: 'rejected' };
      state.error = error;
    },
    [createChannel.fulfilled]: (state, action) => {
      state.loadingStatus = { type: 'creating', status: 'fulfilled' };
      state.error = null;
      channelsAdapter.addOne(state, action);
    },

    [renameChannel.pending]: (state) => {
      state.loadingStatus = { type: 'renaming', status: 'pending' };
      state.error = null;
    },
    [renameChannel.rejected]: (state, { error }) => {
      state.loadingStatus = { type: 'renaming', status: 'rejected' };
      state.error = error;
    },
    [renameChannel.fulfilled]: (state, action) => {
      state.loadingStatus = { type: 'renaming', status: 'fulfilled' };
      state.error = null;
      channelsAdapter.updateOne(state, action);
    },

    [removeChannel.pending]: (state) => {
      state.loadingStatus = { type: 'removing', status: 'pending' };
      state.error = null;
    },
    [removeChannel.rejected]: (state, { error }) => {
      state.loadingStatus = { type: 'removing', status: 'rejected' };
      state.error = error;
    },
    [removeChannel.fulfilled]: (state, { payload: { id } }) => {
      state.loadingStatus = { type: 'removing', status: 'fulfilled' };
      state.error = null;
      channelsAdapter.removeOne(id);
    },

    [setActiveChannel.pending]: (state) => {
      state.loadingStatus = { type: 'settingActive', status: 'pending' };
      state.error = null;
    },
    [setActiveChannel.rejected]: (state, { error }) => {
      state.loadingStatus = { type: 'settingActive', status: 'rejected' };
      state.error = error;
    },
    [setActiveChannel.fulfilled]: (state, { payload: { id } }) => {
      state.loadingStatus = { type: 'settingActive', status: 'fulfilled' };
      state.error = null;
      state.currentChannelId = id;
    },
  },
});

export const { actions } = channelsSlice;
export { createChannel, renameChannel, removeChannel };
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
