import React from "react";
import "../../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-link-spacing">
              Inicio
            </Link>
            <Link to="/servicios" className="nav-link-spacing">
              Productos y Servicios
            </Link>
            <Link to="/nosotros" className="nav-link-spacing">
              Conócenos
            </Link>
            <Link to="/contacto" className="nav-link-spacing" id="nav-button">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
