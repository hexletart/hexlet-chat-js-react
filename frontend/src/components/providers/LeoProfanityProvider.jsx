import React, { useState } from 'react';
import filter from 'leo-profanity';

import LeoProfanityContext from '../../contexts/LeoProfanityContext';

const LeoProfanityProvider = ({ children }) => {
  const [used, setUsed] = useState(true);

  filter.add(filter.getDictionary('en'));
  filter.add(filter.getDictionary('ru'));

  const check = (str) => filter.clean(str);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LeoProfanityContext.Provider value={{ used, setUsed, check }}>
      {children}
    </LeoProfanityContext.Provider>
  );
};

export default LeoProfanityProvider;
