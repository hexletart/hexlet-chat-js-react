import { Spinner } from 'react-bootstrap';

const SmallSpinner = ({ inversed }) => {
  const blockClassNames = inversed
    ? 'd-flex d-flex align-items-center pe-2 bg-success custom-opacity-65'
    : 'd-flex d-flex align-items-center pe-2 ';
  const variant = inversed ? 'light' : 'success';
  return (
    <div className={blockClassNames}>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        variant={variant}
        aria-hidden="true"
      />
    </div>
  );
};

export default SmallSpinner;
