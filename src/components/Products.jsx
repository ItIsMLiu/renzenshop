import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sheer from './Sheer';
import sheers from '../sheers.json'
import "../style/Products.css"
import "../style/Global.css"

function Products() {
  return (
    <>
      <Container fluid className="genericHero productsImg d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Products</h1>
      </Container>

      <Container fluid className="py-5">

        <Row className="products-row justify-content-center mx-auto">
          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Blockout Curtains</h2>
            </Card>
          </Col>
  
          {sheers.map((sheer, index) => (
            <Sheer key={index} title={sheer.title} price={sheer.price} image={sheer.image} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Light-Filtering Curtains</h2>
            </Card>
          </Col>
  
          {sheers.map((sheer, index) => (
            <Sheer key={index} title={sheer.title} price={sheer.price} image={sheer.image} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Sheer Curtains</h2>
            </Card>
          </Col>
  
          {sheers.map((sheer, index) => (
            <Sheer key={index} title={sheer.title} price={sheer.price} image={sheer.image} />
          ))}

        </Row>

      </Container>
    </>  
  );
}

export default Products;
