import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import init from './init.jsx';
import chat from './slices/index.js';

const app = async () => {
  const mountNode = document.getElementById('root');
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <Provider chat={chat}>
      {await init()}
    </Provider>,
  );
  root.render(await init());
};

app();
