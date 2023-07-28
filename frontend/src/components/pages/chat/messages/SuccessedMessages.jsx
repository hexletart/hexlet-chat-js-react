import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import MessagesInfoHeader from './additions/MessagesInfoHeader';
import MessagesDisplay from './additions/MessagesDisplay';
import MessagesInput from './additions/MessagesInput';

const SuccessedMessages = () => {
  const {
    currentChannelId,
    loadingStatus: { status: channelsStatus },
    entities: channels,
  } = useSelector((state) => state.channels);

  const {
    loadingStatus: { status: messagesStatus },
    entities: messages,
  } = useSelector((state) => state.messages);

  const isMessagesInputBlocking = [channelsStatus, messagesStatus].includes('send');

  const activeChannel = channels[currentChannelId];

  const messagesByCurrentChannel = Object.values(messages)
    .filter((message) => message.channelId === currentChannelId);

  return (
    <Col className="p-0 h-100" id="messagesBlock">
      <div className="d-flex flex-column h-100">
        <MessagesInfoHeader
          channelName={activeChannel.name}
          messagesCount={messagesByCurrentChannel.length}
        />
        <MessagesDisplay messages={messagesByCurrentChannel} />
        <MessagesInput
          channelId={currentChannelId}
          isBlocking={isMessagesInputBlocking}
        />
      </div>
    </Col>
  );
};

export default SuccessedMessages;
