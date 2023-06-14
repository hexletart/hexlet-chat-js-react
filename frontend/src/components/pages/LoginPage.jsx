import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Overlay, FloatingLabel, Form, Button, Card, Image, Container, Row, Col } from 'react-bootstrap';
import routes from '../../routes.js';
import useAuth from '../../hooks/index';

const LoginPage = () => {
  const auth = useAuth();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [authFailed, setAuthFailed] = useState(false);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, t('loginPage.card.body.username.yup.min'))
      .max(30, t('loginPage.card.body.username.yup.max'))
      .required(t('loginPage.card.body.username.yup.required')),
    password: Yup.string()
      .min(4, t('loginPage.card.body.password.yup.min'))
      .max(20, t('loginPage.card.body.password.yup.max'))
      .required(t('loginPage.card.body.password.yup.required')),
  });

  const form = (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, actions) => {
        setAuthFailed(false);
        try {
          const token = await axios.post(routes.loginPath, values)
            .then((response) => response.data.token);
          auth.logIn(JSON.stringify(token));
          const { from } = location.state || { from: { pathname: '/' } };
          navigate(from);
        } catch (error) {
          actions.setSubmitting(false);
          if (error.isAxiosError && error.response.status === 401) {
            setAuthFailed(true);
            usernameRef.current.select();
          }
          throw error;
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0 position-relative">
          <h1 className="text-center mb-4">{t('loginPage.card.body.header')}</h1>
          <Form.Group className="form-floating mb-3" controlId="formBasicUsername">
            <FloatingLabel
              controlId="floatingInput1"
              label={t('loginPage.card.body.username.placeholder')}
              className="mb-4"
            >
              <Form.Control
                type="text"
                name="username"
                autoComplete="username"
                placeholder={t('loginPage.card.body.username.placeholder')}
                ref={usernameRef}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.username && !errors.username}
                isInvalid={touched.username && !!errors.username}
              />
              {(touched.username && errors.username) && <div className="invalid-tooltip" data-bs-toggle="tooltip" data-bs-placement="top">{errors.username}</div>}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput2"
              label={t('loginPage.card.body.password.placeholder')}
              className="mb-4"
            >
              <Form.Control
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder={t('loginPage.card.body.password.placeholder')}
                ref={passwordRef}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              {(touched.password && errors.password) && <div className="invalid-tooltip">{errors.password}</div> }
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" ref={buttonRef} className="w-100 mb-3" variant="outline-success" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
            {t('loginPage.card.body.submit')}
          </Button>
          <Overlay target={buttonRef.current} placement="bottom" show={authFailed}>
            {({
              placement: _placement,
              arrowProps: _arrowProps,
              show: _show,
              popper: _popper,
              hasDoneInitialMeasure: _hasDoneInitialMeasure,
              ...props
            }) => (
              <div
                {...props}
                className="position-absolute text-white rounded px-2 py-1"
                style={{
                  backgroundColor: 'rgba(220,53,69,.9)',
                  fontSize: '.875rem',
                  marginTop: '0.1rem',
                  ...props.style,
                }}
              >
                {t('loginPage.card.body.warnings.authFailed')}
              </div>
            )}
          </Overlay>
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
                <span>{t('loginPage.card.footer.description')}</span>
                <a className="text-success" href="/signup">{t('loginPage.card.footer.link')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
