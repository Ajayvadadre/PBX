import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaPhone, FaPhoneSlash, FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const Call = () => {
  const [number, setNumber] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleNumberClick = (num) => {
    setNumber(prev => prev + num);
  };

  const handleCall = () => {
    setIsCallActive(true);
    // Add your call logic here
    console.log('Calling:', number);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setNumber('');
    // Add your end call logic here
  };

  const dialpadNumbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Dialpad</h4>
              <Form.Control
                type="text"
                value={number}
                readOnly
                className="mb-4 text-center display-4"
                placeholder="Enter number"
              />

              <div className="dialpad">
                {dialpadNumbers.map((row, rowIndex) => (
                  <div key={rowIndex} className="d-flex justify-content-center mb-2">
                    {row.map((num) => (
                      <Button
                        key={num}
                        variant="outline-primary"
                        className="dialpad-button mx-2"
                        onClick={() => handleNumberClick(num)}
                        disabled={isCallActive}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center gap-3 mt-4">
                {!isCallActive ? (
                  <Button
                    variant="success"
                    size="lg"
                    className="rounded-circle p-3"
                    onClick={handleCall}
                    disabled={!number}
                  >
                    <FaPhone />
                  </Button>
                ) : (
                  <>
                    <Button
                      variant={isMuted ? "warning" : "secondary"}
                      size="lg"
                      className="rounded-circle p-3"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                    </Button>
                    <Button
                      variant="danger"
                      size="lg"
                      className="rounded-circle p-3"
                      onClick={handleEndCall}
                    >
                      <FaPhoneSlash />
                    </Button>
                  </>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Recent Calls</h4>
              <p className="text-muted">No recent calls</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Call; 