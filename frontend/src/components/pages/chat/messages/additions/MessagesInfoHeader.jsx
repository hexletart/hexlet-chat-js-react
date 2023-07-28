import React from 'react';
import { useTranslation } from 'react-i18next';

const MessagesInfoHeader = ({ channelName, messagesCount }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">

      <p className="m-0">
        <b>
          {`# ${channelName}`}
        </b>
      </p>

      <span className="text-muted">
        {t('chatPage.authedChat.messages.counter.count', { count: messagesCount })}
      </span>

    </div>
  );
};

export default MessagesInfoHeader;
