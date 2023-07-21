import React, { useEffect, useRef } from 'react';

const MessagesDisplay = ({ messages }) => {
  const dummy = useRef();

  useEffect(() => {
    dummy.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="overflow-auto px-5" id="messages-container">
      {messages.map(({ id, userName, body }) => (
        <div className="text-brake mb-2" key={id}>
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
// { body: "new message", channelId: 7, id: 8, username: "admin" }
