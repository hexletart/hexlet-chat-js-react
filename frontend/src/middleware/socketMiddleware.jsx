import { actions as channelsActions } from '../slices/channelsSlice';
import { actions as messagesActions } from '../slices/messagesSlice';
// import { actions as toastsActions } from '../slices/toastsSlice';

const socketMiddleware = (socket) => (store) => (next) => (action) => {
  const { type, payload } = action;
  const { dispatch, getState } = store;
  const getCurrentId = () => getState().channels.currentChannelId;
  // console.log(getState().channels.loadingStatus, '<<<<<<<<<<<<<<<<<<<');
  switch (type) {
    // ---==< authentification >==---
    case 'authed/loggedIn': {
      socket.connect();
      socket.on('connect', () => {
        socket.setConnected();
      });
      socket.on('disconnect', () => {
        socket.setDisconnected();
        socket.offAll();
      });
      // ---==< channels subscription >==---
      socket.on('newChannel', (channelData) => {
        dispatch(channelsActions.addedChannel(channelData));
        // console.log(channelData, 'channelData from creating');
      });
      socket.on('renameChannel', (channelData) => {
        dispatch(channelsActions.renamedChannel(channelData));
        // console.log(channelData, 'channelData from renaming');
      });
      socket.on('removeChannel', (response) => {
        // console.log(response, 'channelData from removing');
        if (response.id === getCurrentId()) {
          const { defaultChannelId } = getState().channels;
          dispatch(channelsActions.setCurrentChannelId({ id: defaultChannelId }));
        }
        dispatch(channelsActions.removedChannel(response));
      });
      // ---==< messages subscription >==---
      socket.on('newMessage', (messageData) => {
        dispatch(messagesActions.addedMessage(messageData));
      });
      break;
    }
    // ---==< logging out ==---
    case 'authed/loggedOut': {
      socket.disconnect();
      break;
    }
    // ---==< channels emitting >==---
    case 'channels/sendChannelAdding':
      socket.emit('newChannel', payload);
      break;
    case 'channels/sendChannelRenaming':
      socket.emit('renameChannel', payload);
      break;
    case 'channels/sendChannelRemoving':
      socket.emit('removeChannel', { id: payload.id });
      break;
    // ---==< messages emitting >==---
    case 'messages/sendMessageAdding':
      socket.emit('newMessage', payload);
      break;

    default:
      return next(action);
  }
  return next(action);
};

export default socketMiddleware;
