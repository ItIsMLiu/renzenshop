import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Item from './Item';
import sheers from '../sheers.json'
import blockouts from '../blockouts.json'
import lightfilterings from '../lightfilterings.json'
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
  
          {blockouts.map((blockout, index) => (
            <Item key={index} link={blockout.link} title={blockout.title} price={blockout.price} image={blockout.image} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Light-Filtering Curtains</h2>
            </Card>
          </Col>
  
          {lightfilterings.map((lightfiltering, index) => (
            <Item key={index} link={lightfiltering.link} title={lightfiltering.title} price={lightfiltering.price} image={lightfiltering.image} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Sheer Curtains</h2>
            </Card>
          </Col>
  
          {sheers.map((sheer, index) => (
            <Item key={index} link={sheer.link} title={sheer.title} price={sheer.price} image={sheer.image} />
          ))}

        </Row>

      </Container>
    </>  
  );
}

export default Products;
