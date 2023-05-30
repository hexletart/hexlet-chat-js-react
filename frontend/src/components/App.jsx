import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import React from 'react';
import AuthorizationPage from './AuthorizationPage';
import NotFoundPage from './NotFoundPage';
import Frame from './Frame';

const App = () => {
  const loginRoutes = ['/', '/login']
    .map((path) => ({ path, element: <AuthorizationPage /> }));
  return useRoutes([
    { path: '/*', element: <NotFoundPage /> },
    ...loginRoutes,
  ]);
};

const AppWrapper = () => (
  <Frame>
    <Router>
      <App />
    </Router>
  </Frame>
);

export default AppWrapper;
