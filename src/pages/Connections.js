import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';

const Connections = () => {
  const [connections] = useState([
    { id: 1, name: 'SIP Server', status: 'connected', type: 'SIP' },
    { id: 2, name: 'WebRTC Server', status: 'connected', type: 'WebRTC' },
    { id: 3, name: 'STUN Server', status: 'disconnected', type: 'STUN' },
    { id: 4, name: 'TURN Server', status: 'connected', type: 'TURN' },
  ]);

  const getStatusColor = (status) => {
    return status === 'connected' ? 'success' : 'danger';
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Connection Status</h4>
              <p className="mb-0">Monitor your connection status</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Connection Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {connections.map((connection) => (
                    <tr key={connection.id}>
                      <td>{connection.name}</td>
                      <td>
                        <Badge bg="info">{connection.type}</Badge>
                      </td>
                      <td>
                        <Badge bg={getStatusColor(connection.status)}>
                          <FaCircle className="me-1" />
                          {connection.status}
                        </Badge>
                      </td>
                      <td>{new Date().toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Connections; 