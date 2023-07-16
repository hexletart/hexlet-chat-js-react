/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import paths from '../paths.js';
import AuthContext from '../contexts/AuthContext';
import Frame from './Frame';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/AuthorizationPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

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
    <AuthContext.Provider value={{ login, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => (
  <AuthProvider>
    <Frame>
      <Router>
        <Routes>
          <Route path={paths.any} element={<NotFoundPage />} />
          <Route path={paths.main} element={<PrivateRoute />} />
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.signingUp} element={<RegistrationPage />} />
        </Routes>
      </Router>
    </Frame>
  </AuthProvider>
);

export default App;
