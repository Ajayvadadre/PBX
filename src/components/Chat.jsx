import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, sender: 'John Doe', text: 'Hello, how can I help you?', time: '10:00 AM' },
    { id: 2, sender: 'Me', text: 'I need help with my account', time: '10:01 AM' },
    { id: 3, sender: 'John Doe', text: 'Sure, what seems to be the problem?', time: '10:02 AM' },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Chat</h4>
              <div className="chat-container" style={{ height: '400px' }}>
                <ListGroup className="mb-3" style={{ height: '320px', overflowY: 'auto' }}>
                  {messages.map((msg) => (
                    <ListGroup.Item
                      key={msg.id}
                      className={`border-0 ${msg.sender === 'Me' ? 'text-end' : ''}`}
                    >
                      <div className="mb-1">
                        <strong>{msg.sender}</strong>
                        <small className="text-muted ms-2">{msg.time}</small>
                      </div>
                      <div>{msg.text}</div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Form onSubmit={handleSend}>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="me-2"
                    />
                    <Button type="submit" variant="primary">
                      <FaPaperPlane />
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat; 