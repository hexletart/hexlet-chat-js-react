import React, { useState } from 'react';

import AuthContext from '../../contexts/AuthContext';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('userId'));
  const login = (token, userName) => {
    localStorage.setItem('userId', token);
    localStorage.setItem('userName', userName);
    setLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setLoggedIn(false);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ login, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
