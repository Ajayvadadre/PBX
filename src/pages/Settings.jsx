import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaSave, FaBell, FaVolumeUp, FaMoon, FaGlobe, FaPhoneAlt, FaLock } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      enabled: true,
      sound: true,
      desktop: true,
      calls: true,
      messages: true,
      voicemail: true
    },
    audio: {
      inputDevice: 'default',
      outputDevice: 'default',
      ringtone: 'classic',
      volume: 80,
      autoAnswer: false,
      noiseReduction: true
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      compactView: false,
      showStatus: true
    },
    language: 'en',
    callSettings: {
      autoReject: false,
      callWaiting: true,
      callForwarding: false,
      forwardingNumber: '',
      recordCalls: false
    }
  });

  const [saveStatus, setSaveStatus] = useState({ show: false, type: '', message: '' });

  const handleChange = (section, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate settings save
    setSaveStatus({
      show: true,
      type: 'success',
      message: 'Settings saved successfully!'
    });
    setTimeout(() => setSaveStatus({ show: false, type: '', message: '' }), 3000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {saveStatus.show && (
          <Alert variant={saveStatus.type} className="mb-4">
            {saveStatus.message}
          </Alert>
        )}

        <Row className="mb-4">
          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Header className="bg-white">
                <h5 className="mb-0">
                  <FaBell className="me-2" />
                  Notification Settings
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Check
                  type="switch"
                  id="notifications-enabled"
                  label="Enable Notifications"
                  checked={settings.notifications.enabled}
                  onChange={(e) => handleChange('notifications', 'enabled', e.target.checked)}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="notifications-sound"
                  label="Play Sound"
                  checked={settings.notifications.sound}
                  onChange={(e) => handleChange('notifications', 'sound', e.target.checked)}
                  disabled={!settings.notifications.enabled}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="notifications-desktop"
                  label="Desktop Notifications"
                  checked={settings.notifications.desktop}
                  onChange={(e) => handleChange('notifications', 'desktop', e.target.checked)}
                  disabled={!settings.notifications.enabled}
                  className="mb-3"
                />
                <div className="ms-4">
                  <Form.Check
                    type="checkbox"
                    id="notifications-calls"
                    label="Incoming Calls"
                    checked={settings.notifications.calls}
                    onChange={(e) => handleChange('notifications', 'calls', e.target.checked)}
                    disabled={!settings.notifications.enabled}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="notifications-messages"
                    label="New Messages"
                    checked={settings.notifications.messages}
                    onChange={(e) => handleChange('notifications', 'messages', e.target.checked)}
                    disabled={!settings.notifications.enabled}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="notifications-voicemail"
                    label="Voicemail"
                    checked={settings.notifications.voicemail}
                    onChange={(e) => handleChange('notifications', 'voicemail', e.target.checked)}
                    disabled={!settings.notifications.enabled}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Header className="bg-white">
                <h5 className="mb-0">
                  <FaVolumeUp className="me-2" />
                  Audio Settings
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Input Device</Form.Label>
                  <Form.Select
                    value={settings.audio.inputDevice}
                    onChange={(e) => handleChange('audio', 'inputDevice', e.target.value)}
                  >
                    <option value="default">Default Microphone</option>
                    <option value="mic1">Microphone 1</option>
                    <option value="mic2">Microphone 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Output Device</Form.Label>
                  <Form.Select
                    value={settings.audio.outputDevice}
                    onChange={(e) => handleChange('audio', 'outputDevice', e.target.value)}
                  >
                    <option value="default">Default Speaker</option>
                    <option value="speaker1">Speaker 1</option>
                    <option value="speaker2">Speaker 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Ringtone</Form.Label>
                  <Form.Select
                    value={settings.audio.ringtone}
                    onChange={(e) => handleChange('audio', 'ringtone', e.target.value)}
                  >
                    <option value="classic">Classic Ring</option>
                    <option value="modern">Modern Ring</option>
                    <option value="simple">Simple Ring</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Volume ({settings.audio.volume}%)</Form.Label>
                  <Form.Range
                    value={settings.audio.volume}
                    onChange={(e) => handleChange('audio', 'volume', parseInt(e.target.value))}
                  />
                </Form.Group>

                <Form.Check
                  type="switch"
                  id="audio-noiseReduction"
                  label="Noise Reduction"
                  checked={settings.audio.noiseReduction}
                  onChange={(e) => handleChange('audio', 'noiseReduction', e.target.checked)}
                  className="mb-3"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Header className="bg-white">
                <h5 className="mb-0">
                  <FaMoon className="me-2" />
                  Appearance
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select
                    value={settings.appearance.theme}
                    onChange={(e) => handleChange('appearance', 'theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System Default</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Font Size</Form.Label>
                  <Form.Select
                    value={settings.appearance.fontSize}
                    onChange={(e) => handleChange('appearance', 'fontSize', e.target.value)}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </Form.Select>
                </Form.Group>

                <Form.Check
                  type="switch"
                  id="appearance-compactView"
                  label="Compact View"
                  checked={settings.appearance.compactView}
                  onChange={(e) => handleChange('appearance', 'compactView', e.target.checked)}
                  className="mb-3"
                />

                <Form.Check
                  type="switch"
                  id="appearance-showStatus"
                  label="Show Status Indicators"
                  checked={settings.appearance.showStatus}
                  onChange={(e) => handleChange('appearance', 'showStatus', e.target.checked)}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Header className="bg-white">
                <h5 className="mb-0">
                  <FaPhoneAlt className="me-2" />
                  Call Settings
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Check
                  type="switch"
                  id="call-autoReject"
                  label="Auto Reject Unknown Calls"
                  checked={settings.callSettings.autoReject}
                  onChange={(e) => handleChange('callSettings', 'autoReject', e.target.checked)}
                  className="mb-3"
                />

                <Form.Check
                  type="switch"
                  id="call-waiting"
                  label="Call Waiting"
                  checked={settings.callSettings.callWaiting}
                  onChange={(e) => handleChange('callSettings', 'callWaiting', e.target.checked)}
                  className="mb-3"
                />

                <Form.Check
                  type="switch"
                  id="call-forwarding"
                  label="Call Forwarding"
                  checked={settings.callSettings.callForwarding}
                  onChange={(e) => handleChange('callSettings', 'callForwarding', e.target.checked)}
                  className="mb-3"
                />

                {settings.callSettings.callForwarding && (
                  <Form.Group className="mb-3">
                    <Form.Label>Forwarding Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      value={settings.callSettings.forwardingNumber}
                      onChange={(e) => handleChange('callSettings', 'forwardingNumber', e.target.value)}
                    />
                  </Form.Group>
                )}

                <Form.Check
                  type="switch"
                  id="call-record"
                  label="Record Calls"
                  checked={settings.callSettings.recordCalls}
                  onChange={(e) => handleChange('callSettings', 'recordCalls', e.target.checked)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary">
            <FaSave className="me-2" />
            Save Settings
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Settings; 