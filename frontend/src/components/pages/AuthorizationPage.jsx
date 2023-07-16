import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Overlay, FloatingLabel, Form, Button, Card, Image, Container, Row, Col } from 'react-bootstrap';
import paths from '../../paths.js';
import routes from '../../routes.js';
import useAuthHook from '../../hooks/authHook';
import applySetterAsync from '../../tools/applySetterAsync.js';

const AuthorizationPage = () => {
  const auth = useAuthHook();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .required(t('loginPage.card.body.userName.yup.required'))
      .min(3, t('loginPage.card.body.userName.yup.min'))
      .max(30, t('loginPage.card.body.userName.yup.max')),
    password: Yup.string()
      .trim()
      .required(t('loginPage.card.body.password.yup.required'))
      .min(4, t('loginPage.card.body.password.yup.min'))
      .max(20, t('loginPage.card.body.password.yup.max')),
  });

  const form = (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, actions) => {
        try {
          setSubmitting(true);
          setAuthFailed(false);
          const { token, username } = await axios.post(routes.loginPath, {
            username: values.userName.trim(),
            password: values.password.trim(),
          })
            .then((response) => response.data);
          auth.login(JSON.stringify(token), username);
          actions.setSubmitting(false);
          navigate(paths.main);
        } catch (error) {
          actions.setSubmitting(false);
          applySetterAsync(setSubmitting, false, 1000);
          if (error.isAxiosError && error.response.status === 401) {
            setAuthFailed(true);
            applySetterAsync(setAuthFailed, false, 30000);
            userNameRef.current.select();
          }
          // throw error;
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => {
        const onChange = (value) => {
          setAuthFailed(false);
          return handleChange(value);
        };
        return (
          <Form noValidate onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0 position-relative">
            <h1 className="text-center mb-4">{t('loginPage.card.body.header')}</h1>
            <Form.Group className="form-floating mb-3" controlId="formLoginUserName">
              <FloatingLabel
                controlId="floatingLoginInput1"
                label={t('loginPage.card.body.userName.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  name="userName"
                  autoComplete="userName"
                  placeholder={t('loginPage.card.body.userName.placeholder')}
                  ref={userNameRef}
                  value={values.userName}
                  onChange={onChange}
                  onBlur={handleBlur}
                  isValid={touched.userName && !errors.userName}
                  isInvalid={touched.userName && !!errors.userName}
                  disabled={submitting}
                />
                {(touched.userName && errors.userName) && <div className="invalid-tooltip" data-bs-toggle="tooltip" data-bs-placement="top">{errors.userName}</div>}
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="form-floating mb-3" controlId="formLoginPassword">
              <FloatingLabel
                controlId="floatingLoginInput2"
                label={t('loginPage.card.body.password.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder={t('loginPage.card.body.password.placeholder')}
                  ref={passwordRef}
                  value={values.password}
                  onChange={onChange}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                  disabled={submitting}
                />
                {(touched.password && errors.password) && <div className="invalid-tooltip">{errors.password}</div>}
              </FloatingLabel>
            </Form.Group>
            <Button
              type="submit"
              ref={buttonRef}
              className="w-100 mb-3"
              variant="outline-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
              disabled={submitting}
            >
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
        );
      }}
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
                <a className="text-success" href={paths.signingUp}>
                  {t('loginPage.card.footer.link')}
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorizationPage;
