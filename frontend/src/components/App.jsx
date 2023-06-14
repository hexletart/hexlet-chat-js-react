/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from '../contexts/index';
import Frame from './Frame';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const AuthProvider = ({ children }) => {
  const logIn = (token) => {
    localStorage.setItem('userId', token);
  };
  const logOut = () => {
    localStorage.removeItem('userId');
  };
  return (
    <AuthContext.Provider value={{ logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => (
  <AuthProvider>
    <Frame>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Frame>
  </AuthProvider>
);

export default App;
