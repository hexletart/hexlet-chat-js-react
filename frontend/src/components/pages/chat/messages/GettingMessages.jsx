import { Col, Placeholder } from 'react-bootstrap';

const GettingMessages = () => (
  <Col className="p-0 h-100" id="messagesBlock">
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <Placeholder className="m-0" as="p" animation="glow">
          <Placeholder xs={1} size="lg" className="rounded-1" />
        </Placeholder>
        <Placeholder className="m-0" as="p" animation="glow">
          <Placeholder xs={2} size="lg" className="rounded-1" />
        </Placeholder>
      </div>

      <div className="overflow-auto px-5" id="messages-container">
        {[4, 8, 6].map((length) => (
          <Placeholder className="mb-2" as="p" animation="glow" key={length}>
            <Placeholder xs={length} size="lg" className="rounded-1" />
          </Placeholder>
        ))}
      </div>

      <Placeholder className="mt-auto px-5 py-3" animation="glow">
        <Placeholder.Button xs={12} className="rounded-1 border-0" bg="secondary" />
      </Placeholder>
    </div>
  </Col>
);

export default GettingMessages;
