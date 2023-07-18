import SuccessToast from './SuccessedToast';
import FailedToast from './FailedToast';

export default (type) => {
  switch (type) {
    case 'successed':
      return SuccessToast;
    case 'failed':
      return FailedToast;
    default:
      throw new Error(`unknow Type of Toast - ${type}`);
  }
};
