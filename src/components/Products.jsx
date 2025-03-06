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
                <p>Designed to block light completely, creating a dark and peaceful environment. Perfect for bedrooms, they ensure optimal privacy and help regulate room temperature. Their thick, durable fabric provides excellent insulation and soundproofing, making them an ideal choice for better sleep and comfort. If you want a balance of privacy, light control, and insulation, layering sheer + blockout curtains is a great option!</p>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={2} xs={0}></Col>
          </Col>
  
          {blockouts.map((blockout) => (
            <Item key={blockout.id} id={blockout.id} category="blockouts" title={blockout.title} price={blockout.price} image1={blockout.image1} colourOption={blockout.colourOption} blockoutPercent={blockout.blockoutPercent}/>
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Col  lg={8} md={8} sm={10} xs={12}>
              <Card>
                <h2>Room-Darkening Curtains</h2>
                <p>Designed to reduce the amount of light entering a room, creating a cozy and inviting atmosphere. Perfect for bedrooms, home offices, or media rooms, they offer enhanced privacy while still allowing a little natural light to filter through. Their stylish, versatile design provides the perfect balance of comfort and light control, making them ideal for spaces where partial darkness is preferred. Layering sheer + room-darkening curtains is a popular choice.</p>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={2} xs={0}></Col>
          </Col>
  
          {roomdarkenings.map((roomdarkening) => (
            <Item key={roomdarkening.id} id={roomdarkening.id} category="roomdarkenings" title={roomdarkening.title} price={roomdarkening.price} image1={roomdarkening.image1} colourOption={roomdarkening.colourOption} blockoutPercent={roomdarkening.blockoutPercent} />
          ))}

          <Col className="pt-5 pb-1" lg={12} md={12} sm={12} xs={12}>
            <Col  lg={8} md={8} sm={10} xs={12}>
              <Card>
                <h2>Sheer Curtains</h2>
                <p>Our sheer curtains are light and airy, designed to allow soft natural light to filter through while maintaining privacy. Made from lightweight and breathable fabric, they create a serene atmosphere in any space. Perfect for living rooms, bedrooms, and dining areas, their versatile design complements various interior styles. For added light control and style, easily pair them with blockout or room-darkening curtains.</p>
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
