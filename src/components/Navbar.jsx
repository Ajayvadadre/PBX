import React from 'react';
import { Navbar, Nav, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <Navbar bg="white" className="border-bottom shadow-sm">
      <Container fluid>
        <Navbar.Brand className="d-none d-md-block">
          <h5 className="mb-0">FONIMO</h5>
          {/* <small className="text-muted">VoIP Softphone</small> */}
        </Navbar.Brand>

        <div className="d-flex align-items-center flex-grow-1 mx-md-4">
          <InputGroup>
            <Form.Control
              placeholder="Search..."
              aria-label="Search"
              className="border-end-0"
            />
            <Button variant="outline-secondary" className="">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>

        <Nav className="align-items-center">
          <Nav.Link className="position-relative me-3">
            <FaBell size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center">
            <FaUserCircle size={24} className="me-2" />
            <div className="d-none d-md-block">
              <div className="fw-bold">John Doe</div>
              <small className="text-muted">Administrator</small>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar; 