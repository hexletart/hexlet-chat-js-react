/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialStateDefaults = {
  loadingStatus: {
    id: null,
    type: null,
    status: null,
  },
  currentChannelId: null,
  defaultChannelId: null,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(_.cloneDeep(initialStateDefaults)),
  reducers: {
    // ---==< settingDefaultChannelId >==---
    addedDefaultChannelId: (state, { payload: { id } }) => {
      state.defaultChannelId = id;
    },
    // ---==< managingCurrentChannelId >==---
    addedCurrentChannelId: (state, { payload: { id } }) => {
      state.currentChannelId = id;
    },
    setCurrentChannelId: (state, { payload: { id } }) => {
      state.currentChannelId = id;
    },
    // ---==< channelsAdding >==---
    addedChannels: channelsAdapter.addMany,
    sendChannelAdding: (state) => {
      state.loadingStatus = {
        type: 'adding',
        status: 'send',
        id: null,
      };
    },
    addedChannel: (state, { payload }) => {
      channelsAdapter.addOne(state, payload);
      state.currentChannelId = payload.id;
      state.loadingStatus = {
        type: 'adding',
        status: 'successed',
        id: payload.id,
      };
    },
    // ---==< channelsRenaming >==---
    sendChannelRenaming: (state, { payload: { id } }) => {
      state.loadingStatus = {
        type: 'renaming',
        status: 'send',
        id,
      };
    },
    renamedChannel: (state, { payload: { id, name } }) => {
      channelsAdapter.updateOne(state, { id, changes: { name } });
      state.loadingStatus = {
        type: 'renaming',
        status: 'successed',
        id,
      };
    },
    // ---==< channelsRemoving >==---
    sendChannelRemoving: (state, { payload: { id } }) => {
      state.loadingStatus = {
        type: 'removing',
        status: 'send',
        id,
      };
    },
    removedChannel: (state, { payload: { id } }) => {
      channelsAdapter.removeOne(state, id);
      state.loadingStatus = {
        type: 'removing',
        status: 'successed',
        id,
      };
    },
    resetState: (state) => {
      channelsAdapter.removeAll(state);
      state = Object.assign(state, _.cloneDeep(initialStateDefaults));
    },
  },
});

export const { actions } = channelsSlice;
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
