import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const useHttpErrors = () => {
  const [statusCode, setStatusCode] = useState(null);
  const { t } = useTranslation();

  const notificationsSchema = {
    informationalError: (status) => `${t('toasts.data.errors.informationalError')} ${status}.`,
    redirectionalError: (status) => `${t('toasts.data.errors.redirectionalError')} ${status}.`,
    clientError: (status) => `${t('toasts.data.errors.clientError')} ${status}.`,
    serverError: (status) => `${t('toasts.data.errors.serverError')} ${status}.`,
  };

  const getTyppedError = (code) => {
    if (code >= 100 && code < 200) {
      return 'informationalError';
    } if (code >= 300 && code < 400) {
      return 'redirectionError';
    } if (code >= 400 && code < 500) {
      return 'clientError';
    } if (code >= 500 && code < 600) {
      return 'serverError';
    }
    return null;
  };

  const typpedError = getTyppedError(statusCode);
  const notification = (!typpedError
    ? t('toasts.errors.default')
    : notificationsSchema[typpedError](statusCode));

  return { setStatusCode, notification };
};

export default useHttpErrors;
