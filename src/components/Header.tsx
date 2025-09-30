import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
} from 'react-bootstrap';

import logo from '../images/logo.svg';

function PrimaryNavbar() {
  return (
    <Container fluid>
      <Navbar bg="body-tertiary" expand="lg" className="py-3 border-bottom border-dark">
        <Container fluid>
          <Navbar.Brand href="/"> 
            <Image src={logo} alt="Green Shop Logo" height="85" className="d-inline-block align-top me-1" />
          </Navbar.Brand>
          <Navbar.Brand href="/" id="nombre_eslogan">
            <h1 className="d-inline fs-1">Green Shop</h1>
            <p className="d-block text-muted medium ms-1">La planta que buscabas, al mejor precio.</p>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="primary-navbar-collapse">
            <span className="navbar-toggler-icon"></span> 
          </Navbar.Toggle>

          <Navbar.Collapse id="primary-navbar-collapse">
            <Nav className="ms-auto mb-2 mb-lg-0 align-items-right"> 
              <NavDropdown title="Crea tu cuenta / Inicia sesión" id="user-account-dropdown" className="me-lg-2">
                <NavDropdown.Item href="/register">Crea tu cuenta</NavDropdown.Item>
                <NavDropdown.Item href="/login">Inicia sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
                </Container>
      </Navbar>
    </Container>
  );
}

export default PrimaryNavbar;