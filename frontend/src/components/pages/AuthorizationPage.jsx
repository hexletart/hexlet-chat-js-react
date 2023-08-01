import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { FloatingLabel, Form, Button, Card, Image, Container, Row, Col } from 'react-bootstrap';

import paths from '../../paths';
import routes from '../../routes';
import useAuthHook from '../../hooks/authHook';
import applySetterAsync from '../../tools/applySetterAsync';
import useHttpErrorsToasts from '../../hooks/httpErrorsToasts';

const AuthorizationPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const auth = useAuthHook();
  const sendError = useHttpErrorsToasts();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .required(t('authorizationPage.card.body.userName.yup.required'))
      .min(3, t('authorizationPage.card.body.userName.yup.min'))
      .max(20, t('authorizationPage.card.body.userName.yup.max')),
    password: Yup.string()
      .trim()
      .required(t('authorizationPage.card.body.password.yup.required'))
      .min(3, t('authorizationPage.card.body.password.yup.min'))
      .max(30, t('authorizationPage.card.body.password.yup.max')),
  });

  const form = (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        setSubmitting(true);
        setAuthFailed(false);
        axios.post(routes.loginPath, {
          username: values.userName.trim(),
          password: values.password.trim(),
        })

          .then((response) => response.data)
          .then((data) => {
            console.log('from try block !!!!!!!!');
            const { token, username } = data;

            console.log('and bellow ', token, username);

            auth.login(JSON.stringify(token), username);
            navigate(paths.main);
          })

          .catch((error) => {
            actions.setSubmitting(false);
            applySetterAsync(setSubmitting, false, 1000);
            userNameRef.current.select();
            console.log('from catch block !!!!!!!!');
            if (error.isAxiosError && error.response.status === 401) {
              setAuthFailed(true);
              applySetterAsync(setAuthFailed, false, 30000);
            } else {
              const status = error?.response.status ?? null;
              sendError(status);
            }
          });
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => {
        const onChange = (value) => {
          setAuthFailed(false);
          return handleChange(value);
        };
        return (
          <Form noValidate onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0 position-relative">
            <h1 className="text-center mb-4">{t('authorizationPage.card.body.header')}</h1>
            <Form.Group className="form-floating mb-3" controlId="formLoginUserName">
              <FloatingLabel
                controlId="floatingLoginInput1"
                label={t('authorizationPage.card.body.userName.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  name="userName"
                  autoComplete="userName"
                  placeholder={t('authorizationPage.card.body.userName.placeholder')}
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
                label={t('authorizationPage.card.body.password.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder={t('authorizationPage.card.body.password.placeholder')}
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
            <div className="position-relative">
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
                {t('authorizationPage.card.body.submit')}
              </Button>
              {authFailed && <div className="custom-invalid-tooltip">{t('authorizationPage.card.body.warnings.authFailed')}</div>}
            </div>
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
                <span>{t('authorizationPage.card.footer.description')}</span>
                <a className="text-success" href={paths.signingUp}>
                  {t('authorizationPage.card.footer.link')}
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
