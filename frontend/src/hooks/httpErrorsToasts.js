import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const useHttpErrorsToasts = () => {
  const { t } = useTranslation();

  const notificationsSchema = {
    informationalError: (status) => `${t('toasts.data.errors.informationalError')} ${status}.`,
    redirectionalError: (status) => `${t('toasts.data.errors.redirectionalError')} ${status}.`,
    clientError: (status) => `${t('toasts.data.errors.clientError')} ${status}.`,
    serverError: (status) => `${t('toasts.data.errors.serverError')} ${status}.`,
    testingConnectionError: () => t('toasts.data.errors.connection'),
    default: () => t('toasts.data.errors.default'),
  };

  const getTyppedError = (code) => {
    if (code >= 100 && code < 200) {
      return 'informationalError';
    } if (code >= 300 && code < 400) {
      return 'redirectionError';
    // } if (code >= 400 && code < 500) {
    //   return 'clientError';
    // } if (code >= 500 && code < 600) {
    //   return 'serverError';
    // }
    } if (code >= 400 && code < 600) {
      return 'testingConnectionError';
    }
    return 'default';
  };

  const sendError = (status) => {
    if (_.isUndefined(status)) {
      return null;
    }

    const typpedError = getTyppedError(status);
    const notification = notificationsSchema[typpedError](status);

    return toast.error(notification);
  };

  return sendError;
};

export default useHttpErrorsToasts;
