import React from 'react';

const MessagesDisplay = ({ messages }) => (
  <div className="overflow-auto px-5" id="messages-container">
    {messages.map((message) => (
      <div className="text-brake mb-2" key={message.id}>
        <b>
          {`${message.author}: `}
        </b>
        <span>
          {message.text}
        </span>
      </div>
    ))}
  </div>
);

export default MessagesDisplay;
