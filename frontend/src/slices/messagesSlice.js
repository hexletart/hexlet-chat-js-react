/* eslint-disable no-param-reassign */
import _ from 'lodash';

import { createSlice, createEntityAdapter, current } from '@reduxjs/toolkit';

import { actions as channelsActions } from './channelsSlice';

const messagesAdapter = createEntityAdapter();

const initialStateDefaults = {
  loadingStatus: {
    id: null,
    type: null,
    status: null,
    channelId: null,
  },
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(_.cloneDeep(initialStateDefaults)),
  reducers: {
    // ---==< messagesAdding >==---
    addedMessages: messagesAdapter.addMany,
    sendMessageAdding: (state, { payload: { channelId } }) => {
      console.log('in message adding');
      state.loadingStatus = {
        type: 'adding',
        status: 'send',
        channelId,
        id: null,
      };
    },
    addedMessage: (state, { payload }) => {
      messagesAdapter.addOne(state, payload);
      const { channelId, id } = payload;
      state.loadingStatus = {
        type: 'adding',
        status: 'seccessed',
        channelId,
        id,
      };
      console.log(current(state));
    },
    resetState: (state) => {
      messagesAdapter.removeAll(state);
      state = Object.assign(state, _.cloneDeep(initialStateDefaults));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(channelsActions.removedChannel, (state, { payload: { id: removedChannelId } }) => {
        const removedIds = Object.entries(state.entities)
          .filter(([, { channelId }]) => channelId === removedChannelId)
          .map(([id]) => +id);
        messagesAdapter.removeMany(state, removedIds);
      });
  },
});

export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
