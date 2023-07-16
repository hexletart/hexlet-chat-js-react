import { ToastContainer } from 'react-bootstrap';
import getToastByType from './index.js';

const ToastsBase = ({ toasts, removeToast }) => (
  <ToastContainer
    className="p-3 position-absolute"
    position="top-center"
    style={{ zIndex: 1 }}
  >
    {toasts.map(({ text, id, type }) => {
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

export default ToastsBase;
