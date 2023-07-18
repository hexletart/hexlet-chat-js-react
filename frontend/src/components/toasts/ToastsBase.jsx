import { ToastContainer } from 'react-bootstrap';

import useToastHook from '../../hooks/toastsHook.jsx';
import getToastByType from './index.js';

const ToastsBase = () => {
  const { toastsCol, removeToast } = useToastHook();
  return (
    <ToastContainer
      className="p-3 position-absolute"
      position="top-center"
      style={{ zIndex: 1 }}
    >
      {toastsCol.map(({ text, id, type }) => {
        const TypedToast = getToastByType(type);
        const onClose = () => {
          removeToast(id);
        };
        return <TypedToast
          key={id}
          text={text}
          onClose={onClose}
        />;
      })}
    </ToastContainer>
  );
};

export default ToastsBase;
