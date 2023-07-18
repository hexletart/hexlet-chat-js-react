import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';

import useToastHook from '../../../../hooks/toastsHook.jsx';
import getModal from '../modal/index.js';
import ChannelsList from './additions/ChannelsList';
import AddChannel from './additions/AddChannel';

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

const getToastNotification = (translator, type) => {
  const notifications = {
    adding: translator('toasts.creating.successed'),
    renaming: translator('toasts.renaming.successed'),
    removing: translator('toasts.removing.successed'),
  };
  return notifications[type] ?? null;
};

const SuccessedChannels = () => {
  const toasts = useToastHook();
  const { t } = useTranslation();
  const {
    entities: channels,
    loadingStatus: {
      type: channelsActionsType,
      status: channelsStatus,
      id: channelsActionsId,
    },
  } = useSelector((state) => state.channels);

  const {
    loadingStatus: { status: messagesStatus },
  } = useSelector((state) => state.messages);

  console.log('channelsStatus', channelsStatus);

  useEffect(() => {
    const notification = getToastNotification(t, channelsActionsType);
    if (channelsStatus === 'successed' && notification) {
      toasts.addToast({ text: notification, type: channelsStatus });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelsStatus]);

  const channelsNames = Object.values(channels).map(({ name }) => name);

  const hasChannelDataSend = [channelsStatus, messagesStatus].includes('send');
  const isAddingChannel = hasChannelDataSend && channelsActionsType === 'adding';
  const isChangingChannel = hasChannelDataSend && ['renaming', 'removing'].includes(channelsActionsType);

  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  const validationSchema = Yup.object().shape({
    channelName: Yup.string()
      .min(3, t('chatPage.authedChat.modals.content.form.addingAndRenaming.yup.min'))
      .max(20, t('chatPage.authedChat.modals.content.form.addingAndRenaming.yup.max'))
      .notOneOf(channelsNames, t('chatPage.authedChat.modals.content.form.addingAndRenaming.yup.notOneOf'))
      .required(),
  });

  return (
    <>
      <Col md={3} lg={2} className="col-4 border-end px-0 bg-light d-flex flex-column h-100" id="channelsBlock">
        <AddChannel
          onShow={showModal}
          isBlocking={hasChannelDataSend}
          isRelated={isAddingChannel}
        />
        <ChannelsList
          onShow={showModal}
          isBlocking={hasChannelDataSend}
          isRelated={isChangingChannel}
          relatedId={channelsActionsId}
        />
      </Col>
      {renderModal({ modalInfo, hideModal, validationSchema })}
      {/* {renderChannelsStatus(channelsLoadingStatus, currentError, t)} */}
    </>
  );
};

export default SuccessedChannels;
