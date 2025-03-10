import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Login from './pages/Login';
import Team from './pages/Team';
import Chat from './pages/Chat';
import Call from './pages/Call.jsx';
import Contacts from './pages/Contacts';
import Voicemail from './pages/Voicemail';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Dialer from './pages/Dialer';
import WebRTC from './pages/WebRTC';
import Connections from './pages/Connections';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const handleLogin = (credentials) => {
    // Add your authentication logic here
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSidebarCollapse = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app-wrapper">
        <div className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`} onClick={closeSidebar} />
        <div className={`sidebar-wrapper ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <Sidebar 
            onLogout={handleLogout} 
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            onCollapse={handleSidebarCollapse}
          />
        </div>
        <div className={`content-wrapper ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <TopNavbar toggleSidebar={toggleSidebar} />
          <div className="page-content">
            <Container fluid>
              <Routes>
                <Route path="/" element={<Navigate to="/team" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/call" element={<Call />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/voicemail" element={<Voicemail />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dialer" element={<Dialer />} />
                <Route path="/webrtc" element={<WebRTC />} />
                <Route path="/connections" element={<Connections />} />
              </Routes>
            </Container>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 