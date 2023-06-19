import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Col } from 'react-bootstrap';

import getModal from './modal/index.js';
import getToast from './toasts/index.js';
import AddButton from './AddButton';
import ItemsList from './ItemsList';

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

const renderChannelsStatus = ({ type, status }, channelsError, translator) => {
  const Component = getToast(status);
  if (_.isNull(Component)) {
    return null;
  }
  const staitment = translator(`chatPage.authedChat.channels.toasts.${type}.${status}`);
  if (channelsError) {
    console.log(`This is an ERROR during channels operation - ${JSON.stringify(channelsError)}`);
  }
  return <Component notification={staitment} />;
};

const Channels = () => {
  const { t } = useTranslation();

  const {
    loadingStatus: channelsLoadingStatus,
    error: currentError,
  } = useSelector(({ channels }) => channels);
  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  const validationSchema = Yup.object().shape({
    channelName: Yup.string()
      .min(3, t('chatPage.authedChat.channels.modals.content.form.addingAndRenaming.yup.min'))
      .max(20, t('chatPage.authedChat.channels.modals.content.form.addingAndRenaming.yup.max'))
      .required(),
  });

  return (
    <>
      <Col md={2} className="col-4 border-end px-0 bg-light d-flex flex-column h-100" id="channelsBlock">
        <div className="d-flex justify-content-between mt-1 mb-2 ps-4 pe-2 p-4">
          <b>{t('chatPage.authedChat.channels.blockName')}</b>
          <AddButton onShow={showModal} />
        </div>
        <ItemsList onShow={showModal} />
      </Col>
      {renderModal({ modalInfo, hideModal, validationSchema })}
      {renderChannelsStatus(channelsLoadingStatus, currentError, t)}
    </>
  );
};

export default Channels;
