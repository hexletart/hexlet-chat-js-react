import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const useChannelsToasts = () => {
  const { t } = useTranslation();

  const notificationsSchema = {
    send: {
      adding: t('toasts.channels.send.creating'),
      renaming: t('toasts.channels.send.renaming'),
      removing: t('toasts.channels.send.removing'),
    },
    successed: {
      adding: t('toasts.channels.successed.creating'),
      renaming: t('toasts.channels.successed.renaming'),
      removing: t('toasts.channels.successed.removing'),
    },
    default: t('toasts.channels.successed.default'),
  };

  const sendToast = (notificationsData) => {
    if (!notificationsData) {
      return null;
    }
    const { type, status } = notificationsData;
    // console.log(notificationsData, '??????????????????????????');
    const notification = notificationsSchema?.[status]?.[type] ?? notificationsSchema.default;
    return (status === 'successed'
      ? toast.success(notification)
      : toast.warn(notification));
  };

  return sendToast;
};

export default useChannelsToasts;
