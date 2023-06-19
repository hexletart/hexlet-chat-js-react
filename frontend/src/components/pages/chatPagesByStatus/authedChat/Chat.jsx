import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Messages from './messages/Messages';
import Channels from './channels/Channels';

const Chat = () => (
  <Container className="h-100 my-4 overflow-hidden rounded shadow">
    <Row className="h-100 flex-md-row bg-white">
      <Channels />
      <Messages />
    </Row>
  </Container>
);

export default Chat;
