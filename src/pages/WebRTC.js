import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaVideo, FaVideoSlash, FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const WebRTC = () => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    // Add your WebRTC room joining logic here
    console.log('Joining room:', roomId);
  };

  const handleLeaveRoom = () => {
    // Add your WebRTC room leaving logic here
    console.log('Leaving room');
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>WebRTC Video Call</h4>
              <p className="mb-0">Join or create a video room</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Room ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex gap-2 mb-3">
                <Button
                  variant={isVideoEnabled ? "success" : "danger"}
                  onClick={() => setIsVideoEnabled(!isVideoEnabled)}
                >
                  {isVideoEnabled ? <FaVideo /> : <FaVideoSlash />}
                </Button>
                <Button
                  variant={isAudioEnabled ? "success" : "danger"}
                  onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                >
                  {isAudioEnabled ? <FaMicrophone /> : <FaMicrophoneSlash />}
                </Button>
              </div>

              <Button
                variant="primary"
                className="w-100"
                onClick={handleJoinRoom}
                disabled={!roomId}
              >
                Join Room
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <h4>Video Preview</h4>
              <div className="video-preview">
                {/* Add your video preview component here */}
                <div className="bg-dark text-white p-5 text-center">
                  Video Preview Area
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WebRTC; 