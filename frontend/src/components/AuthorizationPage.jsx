import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { FloatingLabel, Form, Button, Card, Image, Container, Row, Col } from 'react-bootstrap';

const AuthorizationPage = () => {
  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, t('authorizationPage.card.body.username.yup.min'))
      .max(30, t('authorizationPage.card.body.username.yup.max'))
      .required(t('authorizationPage.card.body.required')),
    password: Yup.string()
      .min(4, t('authorizationPage.card.body.password.yup.min'))
      .max(20, t('authorizationPage.card.body.password.yup.max'))
      .required(t('authorizationPage.card.body.required')),
  });

  const form = (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log('values => ', values);
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
          <h1 className="text-center mb-4">{t('authorizationPage.card.body.header')}</h1>
          <Form.Group className="form-floating mb-3" controlId="formBasicUsername">
            <FloatingLabel
              controlId="floatingInput1"
              label={t('authorizationPage.card.body.username.placeholder')}
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="username"
                autoComplete="username"
                placeholder={t('authorizationPage.card.body.username.placeholder')}
                value={values.username}
                onChange={handleChange}
                isValid={touched.username && !errors.username}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput2"
              label={t('authorizationPage.card.body.password.placeholder')}
              className="mb-3"
            >
              <Form.Control
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder={t('authorizationPage.card.body.password.placeholder')}
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" className="w-100 mb-3" variant="outline-success">
            {t('authorizationPage.card.body.submit')}
          </Button>
        </Form>
      )}
    </Formik>
  );

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xxl={6} md={8} xs={12}>
          <Card className="shadow">
            <Card.Body className="row p-5">
              <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <Image src="../../buda.jpg" roundedCircle />
              </Col>
              {form}
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('authorizationPage.card.footer.description')}</span>
                <a className="text-success" href="/signup">{t('authorizationPage.card.footer.link')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorizationPage;
