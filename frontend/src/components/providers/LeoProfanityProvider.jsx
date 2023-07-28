import React, { useState } from 'react';
import filter from 'leo-profanity';

import LeoProfanityContext from '../../contexts/LeoProfanityContext';

const LeoProfanityProvider = ({ children }) => {
  const [used, setUsed] = useState(true);

  const setLanguage = (lng) => {
    filter.loadDictionary(lng);
  };

  const check = (str) => filter.clean(str);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LeoProfanityContext.Provider value={{ used, setUsed, setLanguage, check }}>
      {children}
    </LeoProfanityContext.Provider>
  );
};

export default LeoProfanityProvider;
