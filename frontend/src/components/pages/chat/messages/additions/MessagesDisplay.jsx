import React, { useEffect, useRef } from 'react';

import useLeoProfanity from '../../../../../hooks/leoProfanity';

const MessagesDisplay = ({ messages }) => {
  const dummy = useRef();
  const { used, check } = useLeoProfanity();

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
            {(used ? check(body) : body)}
          </span>

        </div>
      ))}
      <div ref={dummy} />
    </div>
  );
};

export default MessagesDisplay;
