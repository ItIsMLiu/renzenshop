import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Header.css";

import logo from "../assets/renzen-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" expanded={isOpen} className="custom-nav">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={NavLink} to="/renzenshop">
          <img src={logo} alt="RenZen Logo" className="logo-button" />
        </Navbar.Brand>
        
        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="border-0 shadow-none"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="fs-3" />
        </Navbar.Toggle>

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {["/", "/order", "/products", "/contact", "/about"].map((path, index) => (
              <Nav.Link 
                as={NavLink} 
                to={`/renzenshop${path}`} 
                end 
                onClick={() => setIsOpen(false)}
                className="mx-2"
                key={index}
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;