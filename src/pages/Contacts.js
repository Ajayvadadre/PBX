import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Contacts</h4>
              <p>Manage your contacts</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts; 