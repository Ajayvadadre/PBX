import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Call = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Call</h4>
              <p>Make and receive calls</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Call; 