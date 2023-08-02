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
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const auth = useAuthHook();
  const { used, setUsed } = useLeoProfanity();

  const handleLogout = () => {
    dispatch(authedActions.loggedOut());
    auth.logout();
  };

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const buttons = (
    <ButtonToolbar aria-label="Toolbar with button groups">

      <ButtonGroup className="me-2" aria-label="First group">
        <Button
          variant="outline-secondary"
          className="border-0 text-light"
          onClick={() => setUsed(!used)}
        >
          {used ? t('appFrame.navbar.buttons.switchCensure.off') : t('appFrame.navbar.buttons.switchCensure.on')}
        </Button>
      </ButtonGroup>

      <ButtonGroup className="me-2" aria-label="Second group">
        <Button
          variant="outline-secondary"
          className="border-0 text-light"
          onClick={switchLanguage}
        >
          {t('appFrame.navbar.buttons.switchLanguage')}
        </Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Third group">
        <Button
          variant="light"
          onClick={handleLogout}
        >
          {t('appFrame.navbar.buttons.output')}
        </Button>
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

      {children}

      <ToastContainer
        autoClose={2000}
        position="top-center"
      />

    </div>
  );
};

export default Frame;
