import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', status: 'online', role: 'Manager' },
    { id: 2, name: 'Jane Smith', status: 'offline', role: 'Agent' },
    { id: 3, name: 'Mike Johnson', status: 'busy', role: 'Agent' },
    { id: 4, name: 'Sarah Wilson', status: 'online', role: 'Supervisor' },
  ];

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
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 className="mb-0">{member.name}</h6>
                      <small className="text-muted">{member.role}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaCircle className={`text-${getStatusColor(member.status)} me-2`} />
                      <span className="text-capitalize">{member.status}</span>
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