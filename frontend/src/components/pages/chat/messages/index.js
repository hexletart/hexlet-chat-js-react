import SuccessedMessages from './SuccessedMessages';
import GettingMessages from './GettingMessages';

export default (status) => {
  switch (status) {
    case 'successed':
      return SuccessedMessages;
    case 'loading':
      return GettingMessages;
    default:
      throw new Error(`${status} is unknown, please check messages getting`);
  }
};
