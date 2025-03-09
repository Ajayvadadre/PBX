import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { FaCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  const [teamMembers] = useState([
    { id: 1, name: 'John Doe', status: 'online', role: 'Manager', email: 'john@example.com', ext: '101' },
    { id: 2, name: 'Jane Smith', status: 'offline', role: 'Agent', email: 'jane@example.com', ext: '102' },
    { id: 3, name: 'Mike Johnson', status: 'busy', role: 'Agent', email: 'mike@example.com', ext: '103' },
    { id: 4, name: 'Sarah Wilson', status: 'online', role: 'Supervisor', email: 'sarah@example.com', ext: '104' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'success';
      case 'offline': return 'secondary';
      case 'busy': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Team Members</h4>
              <ListGroup>
                {teamMembers.map((member) => (
                  <ListGroup.Item 
                    key={member.id}
                    className="border-0 mb-2 bg-light rounded"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{member.name}</h6>
                        <small className="text-muted d-block">{member.role}</small>
                        <div className="mt-2">
                          <small className="text-muted me-3">
                            <FaEnvelope className="me-1" />
                            {member.email}
                          </small>
                          <small className="text-muted">
                            <FaPhone className="me-1" />
                            Ext: {member.ext}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Badge bg={getStatusColor(member.status)} className="d-flex align-items-center">
                          <FaCircle size={8} className="me-1" />
                          <span className="text-capitalize">{member.status}</span>
                        </Badge>
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

export default Team; 