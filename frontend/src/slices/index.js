import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import authedReducer from './authedSlice.js';
import SocketClient from '../api/SocketClient.js';
import socketMiddleware from '../middleware/socketMiddleware';

const socket = new SocketClient();

export default configureStore({
  reducer: {
    authed: authedReducer,
    channels: channelsReducer,
    messages: messagesReducer,
  },
  middleware: [socketMiddleware(socket)],
});
