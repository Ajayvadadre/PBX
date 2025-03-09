import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">FONIMO</h2>
          <p className="text-center text-muted mb-4">VoIP Softphone</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="d-flex align-items-center">
                <FaUser className="me-2" />
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="d-flex align-items-center">
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login; 