import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.username && credentials.password) {
        onLogin(credentials);
      } else {
        setError('Please enter both username and password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="brand-name">FONIMO</h2>
            <p className="text-muted">VoIP Softphone</p>
          </div>

          {error && (
            <Alert variant="danger" className="mb-4">
              {error}
            </Alert>
          )}

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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 d-flex align-items-center justify-content-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                <FaSignInAlt className="me-2" />
              )}
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login; 