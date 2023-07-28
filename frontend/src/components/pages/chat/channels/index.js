import SuccessedChannels from './SuccessedChannels';
import GettingChannels from './GettingChannels';

export default (status) => {
  switch (status) {
    case 'successed':
      return SuccessedChannels;
    case 'loading':
      return GettingChannels;
    default:
      return null;
  }
};
