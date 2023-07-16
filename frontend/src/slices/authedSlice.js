/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthed: false,
};

const messagesSlice = createSlice({
  name: 'authed',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isAuthed = true;
    },
    loggedOut: (state) => {
      state.isAuthed = false;
    },
  },
});

export const { actions } = messagesSlice;
export default messagesSlice.reducer;
