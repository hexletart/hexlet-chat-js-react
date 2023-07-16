import SuccessedChannels from './SuccessedChannels';
import GettingChannels from './GettingChannels';

export default (status) => {
  switch (status) {
    case 'successed':
      return SuccessedChannels;
    case 'failed':
    case 'loading':
      return GettingChannels;
    default:
      throw new Error(`${status} is unknown, please check channels getting`);  
  }
};
