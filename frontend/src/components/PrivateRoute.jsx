import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import ChatPage from './pages/chat/ChatBase';
import useAuthHook from '../hooks/authHook';
import { getAuthHeader } from '../tools/auth';
import paths from '../paths';

const PrivateRoute = () => {
  const auth = useAuthHook();
  const location = useLocation();

  const tokenJSON = getAuthHeader();

  return (
    auth.loggedIn
      ? <ChatPage tokenJSON={tokenJSON} />
      : <Navigate to={paths.login} state={{ from: location }} />
  );
};

export default PrivateRoute;
