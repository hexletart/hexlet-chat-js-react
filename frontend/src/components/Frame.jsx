import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ButtonToolbar, ButtonGroup, Container, Navbar, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import { actions as authedActions } from '../slices/authedSlice';
import useAuthHook from '../hooks/authHook';
import paths from '../paths';
import useLeoProfanity from '../hooks/leoProfanity';

const NavButtons = () => {
  const { used, setUsed, setLanguage } = useLeoProfanity();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const auth = useAuthHook();

  setLanguage(i18n.language);

  const handleLogout = () => {
    console.log('from logout by frame');
    dispatch(authedActions.loggedOut());
    auth.logout();
  };

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const buttons = (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant="outline-secondary" className="border-0 text-light" onClick={() => setUsed(!used)} size="sm">цензура</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button variant="outline-secondary" className="border-0 text-light" onClick={switchLanguage} size="sm">{t('appFrame.navbar.buttons.switchLanguage')}</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button variant="light" size="sm" onClick={handleLogout}>{t('appFrame.navbar.buttons.output')}</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );

  return auth.loggedIn ? buttons : null;
};

const Frame = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <Navbar className="bg-success bg-gradient shadow">
        <Container className="flex-wrap">
          <Navbar.Brand className="text-wrap" href={paths.main}>{t('appFrame.navbar.appName')}</Navbar.Brand>
          <NavButtons />
        </Container>
      </Navbar>
      <ToastContainer
        autoClose={6000}
        position="top-center"
      />
      {children}
    </div>
  );
};

export default Frame;
