import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
const filter = require('leo-profanity');

const MessagesDisplay = ({ messages }) => {
  const { i18n: { language } } = useTranslation();
  const dummy = useRef();

  filter.loadDictionary(language);
  useEffect(() => {
    dummy.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="overflow-auto px-5" id="messages-container">
      {messages.map(({ id, userName, body }) => (
        <div className="text-break mb-2" key={id}>
          <b>
            {`${userName}: `}
          </b>
          <span>
            {body}
          </span>
        </div>
      ))}
      <div ref={dummy} />
    </div>
  );
};

export default MessagesDisplay;
