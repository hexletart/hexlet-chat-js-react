/* eslint-disable no-param-reassign */
import _ from 'lodash';

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

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
    },
    resetState: (state) => {
      messagesAdapter.removeAll(state);
      state = Object.assign(state, _.cloneDeep(initialStateDefaults));
    },
  },
});

export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
