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

const RegistrationPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const navigate = useNavigate();
  const auth = useAuthHook();
  const sendError = useHttpErrorsToasts();

  useEffect(() => {
    userNameRef.current.focus();
  }, [userNameRef]);

  const { t } = useTranslation();

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, t('registrationPage.card.body.userName.yup.min'))
      .max(20, t('registrationPage.card.body.userName.yup.max'))
      .required(t('registrationPage.card.body.userName.yup.required')),
    password: Yup.string()
      .min(6, t('registrationPage.card.body.password.yup.min'))
      .max(30, t('registrationPage.card.body.password.yup.max'))
      .required(t('registrationPage.card.body.password.yup.required')),
    passwordConfirmation: Yup.string()
      .required(t('registrationPage.card.body.password.yup.required'))
      .min(6, t('registrationPage.card.body.password.yup.min'))
      .max(30, t('registrationPage.card.body.password.yup.max'))
      .oneOf([Yup.ref('password')], t('registrationPage.card.body.password.yup.confirmation')),
  });

  const form = (
    <Formik
      initialValues={{
        userName: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        setSubmitting(true);
        setAuthFailed(false);
        axios.post(routes.signingUpPath, {
          username: values.userName,
          password: values.password,
        })
          .then((response) => response.data)
          .then((data) => {
            const { token, username } = data;
            auth.login(JSON.stringify(token), username);
            navigate(paths.main);
          })
          .catch((error) => {
            actions.setSubmitting(false);
            applySetterAsync(setSubmitting, false, 1000);
            userNameRef.current.select();
            if (error.isAxiosError && error.response.status === 409) {
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
            <h1 className="text-center mb-4">{t('registrationPage.card.body.header')}</h1>
            <Form.Group className="form-floating mb-3" controlId="formSigningUpUserName">
              <FloatingLabel
                controlId="floatingSignUpInput1"
                label={t('registrationPage.card.body.userName.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  name="userName"
                  autoComplete="userName"
                  placeholder={t('registrationPage.card.body.userName.placeholder')}
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
            <Form.Group className="form-floating mb-3" controlId="formSigningUpPassword">
              <FloatingLabel
                controlId="floatingSignUpInput2"
                label={t('registrationPage.card.body.password.placeholder')}
                className="mb-4"
              >
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder={t('registrationPage.card.body.password.placeholder')}
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
            <Form.Group className="form-floating mb-3" controlId="formSigningUpPasswordConfirmation">
              <FloatingLabel
                controlId="floatingSignUpInput3"
                label={t('registrationPage.card.body.password.placeholderWithConfirmation')}
                className="mb-4"
              >
                <Form.Control
                  type="password"
                  name="passwordConfirmation"
                  autoComplete="passwordConfirmation"
                  placeholder={t('registrationPage.card.body.password.placeholderWithConfirmation')}
                  ref={passwordConfirmationRef}
                  value={values.passwordConfirmation}
                  onChange={onChange}
                  onBlur={handleBlur}
                  isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                  isInvalid={touched.passwordConfirmation && !!errors.passwordConfirmation}
                  disabled={submitting}
                />
                {(touched.passwordConfirmation && errors.passwordConfirmation) && <div className="invalid-tooltip">{errors.passwordConfirmation}</div>}
              </FloatingLabel>
            </Form.Group>
            <Button
              type="submit"
              ref={buttonRef}
              className="w-100 mb-3"
              disabled={submitting}
              variant="outline-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              {t('registrationPage.card.body.submit')}
            </Button>
            {authFailed && <div className="custom-invalid-tooltip">{t('registrationPage.card.body.warnings.authFailed')}</div>}
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
                <span>{t('registrationPage.card.footer.description')}</span>
                <a className="text-success" href={paths.login}>
                  {t('registrationPage.card.footer.link')}
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
