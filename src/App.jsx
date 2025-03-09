import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Login from './components/Login';
import Team from './components/Team';
import Chat from './components/Chat';
import Call from './components/Call';
import Contacts from './components/Contacts';
import Voicemail from './components/Voicemail';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (credentials) => {
    // Add your authentication logic here
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Container fluid className="app-container">
          <Row>
            <Col md={2} className="sidebar-col">
              <Sidebar onLogout={handleLogout} />
            </Col>
            <Col md={10} className="main-content">
              <Routes>
                <Route path="/" element={<Navigate to="/team" replace />} />
                <Route path="/team" element={<Team />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/call" element={<Call />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/voicemail" element={<Voicemail />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      )}
    </Router>
  );
};

export default App; 