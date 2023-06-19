import SuccessToast from './SuccessToast';
import FailedToast from './FailedToast';

export default (status) => {
  switch (status) {
    case 'fulfilled':
      return SuccessToast;
    case 'rejected':
      return FailedToast;
    default:
      return null;
  }
};
