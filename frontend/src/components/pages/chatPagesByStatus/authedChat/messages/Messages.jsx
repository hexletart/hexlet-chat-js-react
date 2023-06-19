import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import { selectors as messagesSelectors } from '../../../../../slices/messagesSlice';
import MessagesInfoHeader from './MessagesInfoHeader';
import MessagesDisplay from './MessagesDisplay';
import MessagesInput from './MessagesInput';

const Messages = () => {
  const {
    currentChannelId: activeId,
    entities: channelsObj,
  } = useSelector((state) => state.channels);
  const messages = useSelector(messagesSelectors.selectAll);
  const activeChannel = channelsObj[activeId];
  if (!activeChannel) {
    throw new Error('Channels list does not contain active channel'); // later I can split errors according types
  }

  const relatedMessages = messages
    .filter((message) => message.channel === activeChannel.name); // properties is not correct

  return (
    <Col className="p-0 h-100" id="messagesBlock">
      <div className="d-flex flex-column h-100">
        <MessagesInfoHeader
          channelName={activeChannel.name}
          messagesCount={relatedMessages.length}
        />
        <MessagesDisplay messages={relatedMessages} />
        <MessagesInput />
      </div>
    </Col>
  );
};

export default Messages;

// {
//   "channels": [
//     {"id":1,"name":"general","removable":false},
//     {"id":2,"name":"random","removable":false},
//   ],
//   "messages":[
//     {"id": "messageId", author: "Admin", channel: "Public", text: "Hello, It's me"}
//     {"id": "messageAnother", author: "Ar", channel: "random", text: "Hello, It's not me"}
//   ],
//   "currentChannelId":1
// }
