import LoadingChat from './LoadingChat';
import Chat from './authedChat/Chat';
import FailedChat from './FailedChat';

const chats = {
  loading: LoadingChat,
  idle: Chat,
  failed: FailedChat,
};

export default (chatStatus) => chats[chatStatus];
