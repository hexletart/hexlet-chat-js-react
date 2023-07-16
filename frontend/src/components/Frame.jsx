import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Navbar, Button } from 'react-bootstrap';
import { actions as authedActions } from '../slices/authedSlice';
import useAuthHook from '../hooks/authHook';
import paths from '../paths';

const ExitButton = () => {
  const dispatch = useDispatch();
  const auth = useAuthHook();
  const handleLogout = () => {
    console.log('from logout by frame');
    dispatch(authedActions.loggedOut());
    auth.logout();
  };
  return (
    auth.loggedIn
      ? (
        <Button variant="light" size="sm" onClick={handleLogout}>OUTPUT</Button>
      ) : null
  );
};

const Frame = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <Navbar className="bg-success bg-gradient shadow">
        <Container>
          <Navbar.Brand href={paths.main}>{t('appFrame.navbar.appName')}</Navbar.Brand>
          <ExitButton />
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default Frame;
