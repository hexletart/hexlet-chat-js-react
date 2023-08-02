import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

import {
  selectors as channelsSelectors,
  actions as channelsActions,
} from '../../../../../slices/channelsSlice';
import SmallSpinner from './smallSpinner';

const ChannelsList = ({ onShow, isBlocking, isRelated, relatedId }) => {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);
  const { currentChannelId } = useSelector((state) => state.channels);
  const { t } = useTranslation();

  const handleSubmit = (currentId) => (e) => {
    e.preventDefault();
    dispatch(channelsActions.setCurrentChannelId({ id: currentId }));
  };

  const renderRemovableItem = (activeStatus, item) => {
    const menu = (
      <>
        <Dropdown.Toggle
          disabled={isBlocking}
          split
          variant={activeStatus ? 'success' : 'light'}
          className="rounded-0 flex-grow-0"
          id="dropdown-split-basic"
        >
          <span className="visually-hidden">Управление каналом</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item disabled={isBlocking} onClick={() => onShow('renaming', item)}>
            {t('chatPage.authedChat.channels.buttons.channelMenu.renaming')}
          </Dropdown.Item>
          <Dropdown.Item disabled={isBlocking} onClick={() => onShow('removing', item)}>
            {t('chatPage.authedChat.channels.buttons.channelMenu.removing')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    );

    return (
      <Dropdown key={item.name} as={ButtonGroup} className="d-flex">
        <Button
          disabled={isBlocking}
          variant={activeStatus ? 'success' : 'light'}
          className="w-100 rounded-0 text-start text-truncate"
          onClick={handleSubmit(item.id)}
        >
          <span className="me-1">#</span>
          {item.name}
        </Button>
        {isRelated && item.id === relatedId
          ? <SmallSpinner inversed={activeStatus} />
          : menu}
      </Dropdown>
    );
  };

  const renderNotRemovableItem = (activeStatus, item) => (
    <Button
      disabled={isBlocking}
      key={item.name}
      variant={activeStatus ? 'success' : 'light'}
      className="w-100 rounded-0 text-start text-truncate"
      onClick={handleSubmit(item.id)}
    >
      <span className="me-1">#</span>
      {item.name}
    </Button>
  );

  return (
    <Nav id="channels-container" className="flex-column nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {!_.isEmpty(channels) && channels.map((channel) => (
        channel.removable
          ? renderRemovableItem(channel.id === currentChannelId, channel)
          : renderNotRemovableItem(channel.id === currentChannelId, channel)
      ))}
    </Nav>
  );
};

export default ChannelsList;
