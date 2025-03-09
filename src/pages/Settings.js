import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Settings = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Settings</h4>
              <p>Configure your application settings</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings; 