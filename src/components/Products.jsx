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
  
          {blockouts.map((blockout) => (
            <Item key={blockout.id} id={blockout.id} category="blockouts" title={blockout.title} price={blockout.price} image1={blockout.image1} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Light-Filtering Curtains</h2>
            </Card>
          </Col>
  
          {lightfilterings.map((lightfiltering) => (
            <Item key={lightfiltering.id} id={lightfiltering.id} category="lightfilterings" title={lightfiltering.title} price={lightfiltering.price} image1={lightfiltering.image1} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <h2>Sheer Curtains</h2>
            </Card>
          </Col>
  
          {sheers.map((sheer) => (
            <Item key={sheer.id} id={sheer.id} category="sheers" title={sheer.title} price={sheer.price} image1={sheer.image1} />
          ))}

        </Row>

      </Container>
    </>  
  );
}

export default Products;
