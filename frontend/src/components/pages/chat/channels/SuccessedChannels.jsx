import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import * as Yup from 'yup';

import getModal from '../modal/index';
import ChannelsList from './additions/ChannelsList';
import AddChannel from './additions/AddChannel';
import useChannelsToasts from '../../../../hooks/channelsToasts';

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

const SuccessedChannels = () => {
  const timerId = useRef();
  const { t } = useTranslation();
  const sendToast = useChannelsToasts();

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

  useEffect(() => {
    const notificationsData = { status: channelsStatus, type: channelsActionsType };

    const getDelayedInfo = (delay = 0) => setTimeout(() => {
      sendToast({ ...notificationsData });
    }, delay);

    if (channelsStatus === 'send') {
      timerId.current = getDelayedInfo(5000);
    } else if (channelsStatus === 'successed') {
      clearTimeout(timerId.current);
      sendToast({ ...notificationsData });
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
    </>
  );
};

export default SuccessedChannels;
