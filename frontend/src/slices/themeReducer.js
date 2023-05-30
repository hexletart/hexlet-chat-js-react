/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: 'dark' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = (state.theme === 'dark') ? 'light' : 'dark';
    },
  },
});

export const { actions } = themeSlice;
export default themeSlice.reducer;
