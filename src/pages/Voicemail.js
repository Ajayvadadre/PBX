import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Voicemail = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Voicemail</h4>
              <p>Check your voicemail messages</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Voicemail; 