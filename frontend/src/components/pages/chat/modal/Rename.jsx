import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

import { actions as channelsActions } from '../../../../slices/channelsSlice';

const Rename = ({ onHide, item, schema }) => {
  const dispatch = useDispatch();
  const inputEl = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    inputEl.current.select();
  }, []);

  const form = (
    <Formik
      initialValues={{ channelName: item.name }}
      validationSchema={schema}
      onSubmit={({ channelName }) => {
        dispatch(channelsActions.sendChannelRenaming({ id: item.id, name: channelName }));
        onHide();
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="renameChannelFormGroup">
            <FloatingLabel
              controlId="renameChannelFloatingLabel"
              label={t('chatPage.authedChat.modals.content.form.addingAndRenaming.placeholder')}
              className="mb-2 text-muted"
            >
              <Form.Control
                type="text"
                name="channelName"
                autoComplete="channelName"
                placeholder={t('chatPage.authedChat.modals.content.form.addingAndRenaming.placeholder')}
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
                {t('chatPage.authedChat.modals.buttons.renaming.buttonCancel')}
              </Button>
              <Button type="submit" variant="success" disabled={values.channelName.length === 0 || !!errors.channelName}>
                {t('chatPage.authedChat.modals.buttons.renaming.buttonSubmit')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );

  return (
    <Modal show onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          {t('chatPage.authedChat.modals.headers.renaming')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
