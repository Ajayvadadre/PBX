import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, sender: 'John Doe', text: 'Hello, how can I help you?', time: '10:00 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'I need help with my account settings', time: '10:01 AM', isMe: true },
    { id: 3, sender: 'John Doe', text: 'Sure, what specific settings are you looking to adjust?', time: '10:02 AM', isMe: false },
    { id: 4, sender: 'Me', text: 'I want to change my notification preferences', time: '10:03 AM', isMe: true },
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
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col>
          <Card className="chat-card h-100">
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">Chat</h5>
                  <small className="text-muted">3 active conversations</small>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="chat-body">
              <ListGroup variant="flush" className="chat-messages">
                {messages.map((msg) => (
                  <ListGroup.Item
                    key={msg.id}
                    className={`border-0 ${msg.isMe ? 'text-end' : ''}`}
                  >
                    <div className={`chat-bubble ${msg.isMe ? 'chat-bubble-right' : 'chat-bubble-left'}`}>
                      <div className="chat-sender">
                        <strong>{msg.sender}</strong>
                        <small className="text-muted ms-2">{msg.time}</small>
                      </div>
                      <div className="chat-text">{msg.text}</div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
            <Card.Footer className="bg-white">
              <Form onSubmit={handleSend}>
                <div className="d-flex gap-2">
                  <Button variant="light" className="rounded-circle p-2">
                    <FaPaperclip />
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button variant="light" className="rounded-circle p-2">
                    <FaSmile />
                  </Button>
                  <Button type="submit" variant="primary" className="rounded-circle p-2">
                    <FaPaperPlane />
                  </Button>
                </div>
              </Form>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat; 