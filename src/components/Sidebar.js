import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaComments, FaPhone, FaAddressBook, FaNetworkWired,FaVideo,FaVoicemail, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: <FaUsers />, label: 'Dashboard' },
    { path: '/team', icon: <FaUsers />, label: 'Team' },
    // { path: '/dialer', icon: <FaComments />, label: 'Dialer' },
    { path: '/webrtc', icon: <FaComments />, label: 'WebRTC' },
    { path: '/connections', icon: <FaNetworkWired />, label: 'Connections' },
    { path: '/chat', icon: <FaComments />, label: 'Chat' },
    { path: '/call', icon: <FaPhone />, label: 'Call' },
    { path: '/contacts', icon: <FaAddressBook />, label: 'Contacts' },
    { path: '/voicemail', icon: <FaVoicemail />, label: 'Voicemail' },
    { path: '/settings', icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <Button 
        variant="link" 
        className="toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FaBars />
      </Button>

      <div className="sidebar-header">
        <h3 className="brand-name">PBX</h3>
        <p className="brand-subtitle">VoIP Softphone</p>
      </div>
      
      <Nav className="sidebar-nav flex-column">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={Link}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
          </Nav.Link>
        ))}
      </Nav>

      <div className="sidebar-footer">
        <Nav.Link
          onClick={onLogout}
          className="sidebar-item"
        >
          <span className="sidebar-icon"><FaSignOutAlt /></span>
          {!isCollapsed && <span className="sidebar-label">Logout</span>}
        </Nav.Link>
      </div>
    </div>
  );
};

export default Sidebar; 