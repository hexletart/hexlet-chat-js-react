import React from 'react';

const MessagesDisplay = ({ messages }) => (
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
  </div>
);

export default MessagesDisplay;
// { body: "new message", channelId: 7, id: 8, username: "admin" }
