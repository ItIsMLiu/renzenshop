import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Step from './Step';
import steps from '../steps.json'
import "../style/Order.css"
import "../style/Global.css"

function Order() {
  return (
    <>
      <Container fluid className="genericHero contactImg d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Order</h1>
      </Container>

      <Container fluid className="py-5">
        <Row className="custom-row justify-content-center mx-auto">
          <Col lg={11} md={11} sm={11} xs={11}>
            <Card className="text-center py-4 px-3">
              <h2>How to Order Your Perfect Curtains</h2>
              <p>Follow these simple steps to bring your favorite curtains home:</p>
            </Card>
          </Col>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} description={step.description} image={step.image} />
          ))}
        </Row>
      </Container>
    </>  
  );
}

export default Order;
