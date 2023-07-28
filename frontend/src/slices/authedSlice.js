/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthed: false,
};

const authedSlice = createSlice({
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

export const { actions } = authedSlice;
export default authedSlice.reducer;
