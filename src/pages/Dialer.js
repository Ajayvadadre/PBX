import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaPhone, FaPhoneSlash } from 'react-icons/fa';

const Dialer = () => {
  const [number, setNumber] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);

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
      <Row className="mb-4">
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Dialer</h4>
              <p className="mb-0">Make calls using the dialpad</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="dialer-container">
            <Card.Body>
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
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center mt-4">
                {!isCallActive ? (
                  <Button
                    variant="success"
                    size="lg"
                    className="px-5"
                    onClick={handleCall}
                    disabled={!number}
                  >
                    <FaPhone className="me-2" />
                    Call
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    size="lg"
                    className="px-5"
                    onClick={handleEndCall}
                  >
                    <FaPhoneSlash className="me-2" />
                    End Call
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Recent Calls</h4>
              <p>No recent calls</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dialer; 