/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState({
    loadingStatus: { type: null, status: null, channelId: null, id: null },
    error: null,
  }),
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
  },
});

export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
