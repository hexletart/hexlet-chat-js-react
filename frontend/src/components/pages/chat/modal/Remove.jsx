import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { actions as channelsActions } from '../../../../slices/channelsSlice';

const Remove = ({ onHide, item }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('item from modal "REMOVE" => ', item);
    dispatch(channelsActions.sendChannelRemoving(item));
    onHide();
  };

  return (
    <Modal show onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          {t('chatPage.authedChat.modals.headers.removing')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">
          {t('chatPage.authedChat.modals.content.text.removing')}
        </p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={onHide}>
            {t('chatPage.authedChat.modals.buttons.removing.buttonCancel')}
          </Button>
          <Button variant="danger" onClick={(e) => onSubmit(e)}>
            {t('chatPage.authedChat.modals.buttons.removing.buttonSubmit')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
