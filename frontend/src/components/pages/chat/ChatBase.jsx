import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import normalize from '../../../tools/normalize.js';
import routes from '../../../routes.js';
import { actions as channelsActions } from '../../../slices/channelsSlice.js';
import { actions as messagesActions } from '../../../slices/messagesSlice.js';
import { actions as authedActions } from '../../../slices/authedSlice.js';
import getChannelsComponent from './channels/index.js';
import getMessagesComponent from './messages/index.js';
import useAuthHook from '../../../hooks/authHook.jsx';
import useToastHook from '../../../hooks/toastsHook.jsx';

const ChatPage = ({ tokenJSON }) => {
  const auth = useAuthHook();
  const { addToast } = useToastHook();
  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState('loading');

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
          addToast({ type: 'failed', text: error.message });
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
      <Row className="h-100 flex-md-row bg-white">
        <ChannelsComponent />
        <MessagesComponent />
      </Row>
    </Container>
  );
};

export default ChatPage;
