import { useTranslation } from 'react-i18next';
import { Container, Navbar } from 'react-bootstrap';

const Frame = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <Navbar className="bg-success bg-gradient shadow">
        <Container>
          <Navbar.Brand href="#">{t('appFrame.navbar.appName')}</Navbar.Brand>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default Frame;
