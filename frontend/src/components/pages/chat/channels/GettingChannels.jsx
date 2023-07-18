import _ from 'lodash';
import { Col, Placeholder } from 'react-bootstrap';

const buttonsNumber = 2;

const GettingChannels = () => (
  <Col md={3} lg={2} className="col-4 border-end px-0 bg-light d-flex flex-column h-100" id="loadingChannelsBlock">
    <Placeholder className="d-flex justify-content-between mt-1 mb-2 ps-4 p-4" as="p" animation="glow">
      <Placeholder xs={12} size="lg" className="rounded-1" />
    </Placeholder>
    {_.times(buttonsNumber, (a) => (
      <Placeholder key={a} className="flex-column nav-fill px-2 mb-1 overflow-auto d-block" animation="glow">
        <Placeholder.Button xs={12} className="rounded-1 border-0" bg="secondary" />
      </Placeholder>
    ))}
  </Col>
);

export default GettingChannels;
