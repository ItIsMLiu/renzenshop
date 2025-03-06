import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Item from './Item';
import sheers from '../sheers.json'
import blockouts from '../blockouts.json'
import roomdarkenings from '../roomdarkenings.json'
import "../style/Products.css"
import "../style/Global.css"

function Products() {
  return (
    <>
      <Container fluid className="genericHero productsImg d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Products</h1>
      </Container>

      <Container fluid className="py-5">

        <Row className="products-row mx-auto">
          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Col  lg={8} md={8} sm={10} xs={12}>
              <Card>
                <h2>Blockout Curtains</h2>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={2} xs={0}></Col>
          </Col>
  
          {blockouts.map((blockout) => (
            <Item key={blockout.id} id={blockout.id} category="blockouts" title={blockout.title} price={blockout.price} image1={blockout.image1} colourOption={blockout.colourOption}/>
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Col  lg={8} md={8} sm={10} xs={12}>
              <Card>
                <h2>Room-Darkening Curtains</h2>
                <p>Blocks most light but not 100% like blackout curtains. Reduces glare while maintaining some natural brightness. Good for bedrooms, home offices, or media rooms where partial darkness is preferred.</p>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={2} xs={0}></Col>
          </Col>
  
          {roomdarkenings.map((roomdarkening) => (
            <Item key={roomdarkening.id} id={roomdarkening.id} category="roomdarkenings" title={roomdarkening.title} price={roomdarkening.price} image1={roomdarkening.image1} colourOption={roomdarkening.colourOption} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Col  lg={8} md={8} sm={10} xs={12}>
              <Card>
                <h2>Sheer Curtains</h2>
                <p>Our sheer curtain is lightweight and breathable, allowing soft natural light to filter through while maintaining privacy. Its versatile design makes it ideal for living rooms, bedrooms, and dining areas. Pair it with blockout or room-darkening curtains for added light control and style.</p>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={2} xs={0}></Col>
          </Col>
  
          {sheers.map((sheer) => (
            <Item key={sheer.id} id={sheer.id} category="sheers" title={sheer.title} price={sheer.price} image1={sheer.image1} colourOption={sheer.colourOption}  />
          ))}

        </Row>

      </Container>
    </>  
  );
}

export default Products;
