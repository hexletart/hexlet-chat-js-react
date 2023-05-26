import ReactDom from 'react-dom/client';
import init from './init.jsx';

const app = async () => {
  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render(await init());
};

app();
