import React from 'react';
import { useTranslation } from 'react-i18next';

import SmallSpinner from './smallSpinner';

const AddChannel = ({ onShow, isBlocking, isRelated }) => {
  const { t } = useTranslation();
  const button = (
    <button type="button" className="p-0 text-success btn btn-group-vertical border-0" onClick={() => onShow('adding')} disabled={isBlocking}>
      <svg xmlns="c/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
      <span className="visually-hidden">+</span>
    </button>
  );

  const spinner = (
    <div className="d-flex d-flex align-items-center">
      <SmallSpinner />
    </div>
  );

  return (
    <div className="d-flex justify-content-between mt-1 mb-2 ps-4 pe-2 p-4">
      <b className="text-truncate">{t('chatPage.authedChat.channels.blockName')}</b>
      {isRelated ? spinner : button}
    </div>
  );
};

export default AddChannel;
