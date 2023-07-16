import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const SuccessedToast = ({ onClose, text }) => {
  const [show, setShown] = useState(true);

  return (
    <Toast
      autohide
      delay={4000}
      onClose={() => {
        onClose();
        setShown(false);
      }}
      show={show}
      className="toast-animation"
    >
      <Toast.Header className="rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-success me-2" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <strong className="me-auto text-success">{text} </strong>
      </Toast.Header>
    </Toast>
  );
};

export default SuccessedToast;
