import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../style/Footer.css";
import "../style/Global.css";

function Footer() {
  return (
    <footer className="text-center py-4">
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="border-0 footerCard">
                        <h5 className="fw-bold">RenZen's Tailored Curtains</h5>
                        <p className="text-muted">For a perfect fit and timeless style.</p>
                        <div className="d-inline-block">
                        <NavLink to="/renzenshop/contact" className="nav-link">
                            <Button variant="primary">Contact Now!</Button>
                        </NavLink>
                        </div>
                        <div className="justify-content-center d-flex flex-row gap-3 py-3">
                            <a href="https://www.instagram.com/renzenshop/" className="footer-link d-flex" target="blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/people/RenZen-Shop/61550549634449/" target="blank" className="footer-link d-flex">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div> 
                        <p className="text-muted mb-0">&copy; 2025, RenZen</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
