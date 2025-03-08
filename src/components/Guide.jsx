import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import "../style/Guide.css"
import "../style/Global.css"

function Guide() {
  return (
  <>
    <Container fluid className="genericHero guideImg d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Design Guide</h1>
      <p>Find the perfect curtains to match your style with our expert guide.</p>
    </Container>

    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col lg={5} md={8} sm={11}>
          {/* Subtitle */}
          <Card className="py-4 px-3">
            <h2>Explore a variety of designs, fabrics, and tips to choose the ideal curtains for your space.</h2>
          </Card>

          <Card className="py-4 px-3 mt-4">
          </Card>

          <Card className="py-4 px-3 mt-4">        
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Guide;