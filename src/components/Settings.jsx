import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    soundEnabled: true,
    autoAnswer: false,
    language: 'en',
    theme: 'light',
    ringtone: 'default',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your settings save logic here
    console.log('Saving settings:', settings);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4 className="mb-4">Settings</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="notifications"
                    name="notifications"
                    label="Enable Notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="soundEnabled"
                    name="soundEnabled"
                    label="Enable Sound"
                    checked={settings.soundEnabled}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="autoAnswer"
                    name="autoAnswer"
                    label="Auto Answer Calls"
                    checked={settings.autoAnswer}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select
                    name="theme"
                    value={settings.theme}
                    onChange={handleChange}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Ringtone</Form.Label>
                  <Form.Select
                    name="ringtone"
                    value={settings.ringtone}
                    onChange={handleChange}
                  >
                    <option value="default">Default</option>
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                  </Form.Select>
                </Form.Group>

                <Button type="submit" variant="primary">
                  <FaSave className="me-2" />
                  Save Settings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings; 