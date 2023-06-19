import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { normalize } from '../../tools.js';
import routes from '../../routes.js';
import { actions as channelsActions } from '../../slices/channelsSlice.js';
import { actions as messagesActions } from '../../slices/messagesSlice.js';
import getChatByStatus from './chatPagesByStatus/index';

const ChatPage = ({ tokenJSON }) => {
  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState('loading');

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(routes.usersPath, { headers: { ...tokenJSON } })
        .then((response) => {
          const { channels, messages, currentChannelId } = response.data;
          dispatch(channelsActions.addCurrentChannelId(currentChannelId));
          dispatch(channelsActions.addChannels(normalize(channels)));
          dispatch(messagesActions.addMessages(normalize(messages)));
          setLoadingStatus('idle');
        })
        .catch((error) => {
          setLoadingStatus('failed');
          throw error;
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ChatComponent = getChatByStatus(loadingStatus);
  return <ChatComponent />;
};

export default ChatPage;
