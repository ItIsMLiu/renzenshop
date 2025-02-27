import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Step from './Step';
import steps from '../steps.json'
import "../style/Order.css"
import "../style/Global.css"

function Order() {
  return (
    <>
      <Container fluid className="genericHero orderImg d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold text-center" >Order</h1>
        <p className="fs-4 text-center"></p>
      </Container>
      <Container fluid className="allContent">
        <Row className="align-items-center">
          {steps.map((step, index) => (
            <Step key={index} title={step.title} link={step.link} image={step.image} />
          ))}
        </Row>
      </Container>
    </>  
  );
}

export default Order;
