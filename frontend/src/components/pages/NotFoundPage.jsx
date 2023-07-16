import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xxl={6} md={8} xs={12}>
          <div className="text-center">
            <Image alt={t('notFoundPage.header')} className="img-fluid h-25" src="../../notFoundPage.png" rounded />
            <h1 className="h4 text-muted mt-2">{t('notFoundPage.header')}</h1>
            <p className="text-muted mb-0">{t('notFoundPage.description')}</p>
            <a className="text-success" href="/">{t('notFoundPage.link')}</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
