import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routes from '../routes.js';

const ChatPage = ({ token }) => {
  const [privateResponse, setPrivateResponse] = useState(null);
  useEffect(() => {
    axios.get(routes.usersPath, { headers: { ...token } })
      .then((response) => {
        setPrivateResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <p>{JSON.stringify(privateResponse)}</p>
  );
};

export default ChatPage;
