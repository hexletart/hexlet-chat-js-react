import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import authedReducer from './authedSlice';
import SocketClient from '../api/SocketClient';
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
