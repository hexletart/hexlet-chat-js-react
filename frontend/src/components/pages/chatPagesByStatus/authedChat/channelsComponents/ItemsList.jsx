import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { selectors as channelsSelectors } from '../../../../../slices/channelsSlice';

const ItemsList = ({ onShow }) => {
  const channels = useSelector(channelsSelectors.selectAll);
  const { t } = useTranslation();

  const activeChannel = '1'; // example

  const renderRemovableItem = (activeStatus, item) => (
    <Dropdown key={item.name} as={ButtonGroup} className="d-flex">
      <Button variant={activeStatus ? 'success' : 'light'} className="w-100 rounded-0 text-start text-truncate">
        <span className="me-1">#</span>
        {item.name}
      </Button>
      <Dropdown.Toggle split variant={activeStatus ? 'success' : 'light'} className="rounded-0 flex-grow-0" id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onShow('renaming', item)}>
          {t('chatPage.authedChat.channels.buttons.channelMenu.renaming')}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onShow('removing', item)}>
          {t('chatPage.authedChat.channels.buttons.channelMenu.removing')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  const renderNotRemovableItem = (activeStatus, item) => (
    <Button key={item.name} variant={activeStatus ? 'success' : 'light'} className="w-100 rounded-0 text-start">
      <span className="me-1">#</span>
      {item.name}
    </Button>
  );

  return (
    <Nav id="channels-container" className="flex-column nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {/* {!_.isEmpty(channels) && channels.map(({ id, name, removable }) => { */}
      {!_.isEmpty(channels) && channels.map((channel) => (
        channel.removable // with wrong for testing
          ? renderRemovableItem(String(channel.id) === activeChannel, channel)
          : renderNotRemovableItem(String(channel.id) === activeChannel, channel)
      ))}
    </Nav>
  );
};

export default ItemsList;

/* <Nav.Item className="mt-1 w-100">
  <Nav.Link eventKey={id} variant="light" as={Button}
  className="p-0 h-100 text-start text-truncate">
    <Dropdown as={ButtonGroup} className="d-flex">
      <Button variant="transparent" className="w-100 rounded-0">Split Button</Button>
      <Dropdown.Toggle split variant="transparent"
      className="text-truncate flex-grow-0" id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item autoclose href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item autoclose href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item autoclose href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Nav.Link>
</Nav.Item> */
