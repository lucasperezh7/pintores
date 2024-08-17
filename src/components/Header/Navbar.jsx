import React from "react";
import "../../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link className="nav-link-spacing" href="#servicios">
              Inicio
            </Nav.Link>
            <Nav.Link className="nav-link-spacing" href="#servicios">
              Productos y Servicios
            </Nav.Link>
            <Nav.Link className="nav-link-spacing" href="#nosotros">
              Conócenos
            </Nav.Link>
            <Nav.Link
              className="nav-link-spacing"
              id="nav-button"
              href="#contacto"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
