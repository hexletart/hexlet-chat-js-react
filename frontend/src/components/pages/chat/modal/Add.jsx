import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

import { actions as channelsActions } from '../../../../slices/channelsSlice';

const Add = ({ onHide, schema }) => {
  const dispatch = useDispatch();
  const inputEl = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const form = (
    <Formik
      initialValues={{ channelName: '' }}
      validationSchema={schema}
      onSubmit={({ channelName }) => {
        dispatch(channelsActions.sendChannelAdding({ name: channelName }));
        onHide();
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <FloatingLabel
              controlId="channelNameToAdd"
              label={t('chatPage.authedChat.modals.content.form.addingAndRenaming.placeholder.adding')}
              className="mb-2 text-muted"
            >
              <Form.Control
                type="text"
                name="channelName"
                autoComplete="channelName"
                placeholder={t('chatPage.authedChat.modals.content.form.addingAndRenaming.placeholder.adding')}
                ref={inputEl}
                value={values.channelName}
                onChange={handleChange}
                isValid={values.channelName.length > 0 && !errors.channelName}
                isInvalid={values.channelName.length > 0 && !!errors.channelName}
              />
              {(values.channelName.length > 0 && !!errors.channelName) && <div className="invalid-tooltip py-0">{errors.channelName}</div>}
            </FloatingLabel>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary" className="me-2" onClick={onHide}>
                {t('chatPage.authedChat.modals.buttons.adding.buttonCancel')}
              </Button>
              <Button type="submit" variant="success" disabled={values.channelName.length === 0 || !!errors.channelName}>
                {t('chatPage.authedChat.modals.buttons.adding.buttonSubmit')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );

  return (
    <Modal show onHide={onHide} backdrop="static" restoreFocus>
      <Modal.Header closeButton>
        <Modal.Title>
          {t('chatPage.authedChat.modals.headers.adding')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>
    </Modal>
  );
};

export default Add;
