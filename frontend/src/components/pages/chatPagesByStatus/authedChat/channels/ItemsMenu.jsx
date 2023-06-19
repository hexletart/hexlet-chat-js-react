import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import ModalFrame from './ModalFrame';

const ItemsMenu = () => {
  const { t } = useTranslation();
  // const [modalStatus, switchModalWindow] = useState({
  //   renameChannel: false,
  //   deleteChannel: false,
  // });

  const [activeModal, setActiveModal] = useState(null);
  const switchRenameModalOn = () => setActiveModal('renaming');
  const switchDeleteModalOn = () => setActiveModal('removing');
  const switchModalOff = () => setActiveModal(null);

  const [renameModalType, deleteModalType] = ['renaming', 'removing'];

  const i18nextItems = {
    renameButton: t(`chatPage.authedChat.channels.buttons.channelMenu.${renameModalType}`),
    deleteButton: t(`chatPage.authedChat.channels.buttons.channelMenu.${deleteModalType}`),
  };

  // const currentModul = () => {
  //   switch (activeModal) {
  //     case 'renaming':
  //       return (
  //         <ModalFrame
  //           thunk={renameChannel}
  //           modalBreaker={switchModalsOff}
  //           modalStatus={true}
  //           modalType={renameModalType}
  //         />
  //       )
  //   }
  // };

  return (
    <>
      <Dropdown.Menu>
        <Dropdown.Item onClick={switchRenameModalOn}>
          {i18nextItems.renameButton}
        </Dropdown.Item>
        <Dropdown.Item onClick={switchDeleteModalOn}>
          {i18nextItems.deleteButton}
        </Dropdown.Item>
      </Dropdown.Menu>
      {activeModal === 'renaming' && <ModalFrame
        thunk={renameChannel}
        modalBreaker={switchModalOff}
        modalStatus="false"
        modalType={renameModalType}
      />}
    </>
  );
};

export default ItemsMenu;
