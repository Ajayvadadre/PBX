import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Team</h4>
              <p>Manage your team members here</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team; 