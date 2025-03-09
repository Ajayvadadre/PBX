import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FaPlay, FaTrash, FaDownload } from 'react-icons/fa';

const Voicemail = () => {
  const [voicemails] = useState([
    { id: 1, from: 'John Doe', date: '2024-01-20', time: '10:30 AM', duration: '0:45' },
    { id: 2, from: 'Jane Smith', date: '2024-01-19', time: '2:15 PM', duration: '1:20' },
    { id: 3, from: 'Mike Johnson', date: '2024-01-18', time: '11:45 AM', duration: '0:30' },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Voicemail Messages</h4>
              <ListGroup>
                {voicemails.map((voicemail) => (
                  <ListGroup.Item 
                    key={voicemail.id}
                    className="border-0 mb-2 bg-light rounded"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{voicemail.from}</h6>
                        <div className="text-muted small">
                          {voicemail.date} at {voicemail.time}
                          <span className="ms-2">Duration: {voicemail.duration}</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <Button variant="primary" size="sm">
                          <FaPlay />
                        </Button>
                        <Button variant="secondary" size="sm">
                          <FaDownload />
                        </Button>
                        <Button variant="danger" size="sm">
                          <FaTrash />
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Voicemail; 