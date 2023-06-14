import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import AddButton from './channelsComponents/AddButton';
import ItemsList from './channelsComponents/ItemsList';
import getModal from './modal/index.js';

const renderModal = ({
  modalInfo: { type, item },
  hideModal,
  validationSchema,
}) => {
  if (!type) {
    return null;
  }
  const Component = getModal(type);
  return <Component onHide={hideModal} item={item} schema={validationSchema} />;
};

const Chat = () => {
  const { t } = useTranslation();

  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  const validationSchema = Yup.object().shape({
    channelName: Yup.string()
      .min(3, t('chatPage.authedChat.channels.modals.content.form.addingAndRenaming.yup.min'))
      .max(20, t('chatPage.authedChat.channels.modals.content.form.addingAndRenaming.yup.max'))
      .required(),
  });

  const channelsBlock = (
    <Col md={2} className="col-4 border-end px-0 bg-light d-flex flex-column h-100">
      <div className="d-flex justify-content-between mt-1 mb-2 ps-4 pe-2 p-4">
        <b>{t('chatPage.authedChat.channels.blockName')}</b>
        <AddButton onShow={showModal} />
      </div>
      <ItemsList onShow={showModal} />
    </Col>
  );

  const messagesBlock = (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small" />
        <div className="overflow-auto px-5" id="chat-container" />
        <div className="mt-auto px-5 py-3" />
      </div>
    </Col>
  );

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 flex-md-row bg-white">
        {channelsBlock}
        {messagesBlock}
      </Row>
      {renderModal({ modalInfo, hideModal, validationSchema })}
    </Container>
  );
};

export default Chat;
