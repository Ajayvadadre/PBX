import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts] = useState([
    { id: 1, name: 'John Doe', phone: '+1 234 567 890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '+1 234 567 891', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', phone: '+1 234 567 892', email: 'mike@example.com' },
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Contacts</h4>
                <Button variant="primary" size="sm">
                  Add Contact
                </Button>
              </div>

              <Form.Group className="mb-4">
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
                </div>
              </Form.Group>

              <ListGroup>
                {filteredContacts.map((contact) => (
                  <ListGroup.Item key={contact.id} className="border-0 mb-2 bg-light rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{contact.name}</h6>
                        <div className="text-muted small">
                          <div className="d-flex align-items-center mb-1">
                            <FaPhone className="me-2" />
                            {contact.phone}
                          </div>
                          <div className="d-flex align-items-center">
                            <FaEnvelope className="me-2" />
                            {contact.email}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline-primary" size="sm">
                        Call
                      </Button>
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

export default Contacts; 