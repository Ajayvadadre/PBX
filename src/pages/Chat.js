import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Chat</h4>
              <p>Your messages and conversations</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat; 