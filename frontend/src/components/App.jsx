/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RollbarProvider from './providers/RollbarProvider';
import AuthProvider from './providers/AuthProvider';
import LeoProfanityProvider from './providers/LeoProfanityProvider';
import paths from '../paths.js';
import Frame from './Frame';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/AuthorizationPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <RollbarProvider>
    <AuthProvider>
      <LeoProfanityProvider>
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
      </LeoProfanityProvider>
    </AuthProvider>
  </RollbarProvider>
);

export default App;
