import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Navbar, Button } from 'react-bootstrap';
import { actions as authedActions } from '../slices/authedSlice';

import useAuthHook from '../hooks/authHook';
import paths from '../paths';
import ToastsBase from './toasts/ToastsBase';

const ExitButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useAuthHook();
  const handleLogout = () => {
    console.log('from logout by frame');
    dispatch(authedActions.loggedOut());
    auth.logout();
  };
  return (
    auth.loggedIn
      ? (
        <Button variant="light" size="sm" onClick={handleLogout}>{t('appFrame.navbar.buttons.output')}</Button>
      ) : null
  );
};

const Frame = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <Navbar className="bg-success bg-gradient shadow">
        <Container className="flex-wrap">
          <Navbar.Brand className="text-wrap" href={paths.main}>{t('appFrame.navbar.appName')}</Navbar.Brand>
          <ExitButton />
        </Container>
      </Navbar>
      <ToastsBase />
      {children}
    </div>
  );
};

export default Frame;
