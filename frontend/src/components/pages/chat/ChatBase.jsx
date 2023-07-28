import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import normalize from '../../../tools/normalize';
import routes from '../../../routes';
import { actions as channelsActions } from '../../../slices/channelsSlice';
import { actions as messagesActions } from '../../../slices/messagesSlice';
import { actions as authedActions } from '../../../slices/authedSlice';
import getChannelsComponent from './channels/index';
import getMessagesComponent from './messages/index';
import useAuthHook from '../../../hooks/authHook';
import useHttpErrorsToasts from '../../../hooks/httpErrorsToasts';

const ChatPage = ({ tokenJSON }) => {
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const dispatch = useDispatch();
  const sendError = useHttpErrorsToasts();
  const auth = useAuthHook();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(routes.usersPath, { headers: { ...tokenJSON } })
        .then((response) => {
          const { channels, messages, currentChannelId } = response.data;
          dispatch(authedActions.loggedIn());
          dispatch(channelsActions.addedDefaultChannelId({ id: currentChannelId }));
          dispatch(channelsActions.addedCurrentChannelId({ id: currentChannelId }));
          dispatch(channelsActions.addedChannels(normalize(channels)));
          dispatch(messagesActions.addedMessages(normalize(messages)));
          setLoadingStatus('successed');
        })
        .catch((error) => {
          if (error.isAxiosError && error.response.status !== 401) {
            const status = error?.response.status ?? null;
            sendError(status);
          }
          dispatch(authedActions.loggedOut());
          auth.logout();
        });
    };

    fetchData();

    return () => {
      dispatch(channelsActions.resetState());
      dispatch(messagesActions.resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ChannelsComponent = getChannelsComponent(loadingStatus);
  const MessagesComponent = getMessagesComponent(loadingStatus);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 flex-nowrap bg-white">
        <ChannelsComponent />
        <MessagesComponent />
      </Row>
    </Container>
  );
};

export default ChatPage;
