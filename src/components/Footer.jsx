import React from 'react';
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
                            <Button variant="primary" href="mailto:renzenshop@outlook.com" className="mt-2">
                            Contact Now!
                            </Button>
                        </div>
                        <p className="text-muted py-4">&copy; 2025 - RenZen</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
