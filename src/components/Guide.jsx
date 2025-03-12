import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, CardImg } from "react-bootstrap";

import "../style/Guide.css"
import "../style/Global.css"

function Guide() {
  return (
  <>
    <Container fluid className="genericHero guideImg d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Buying Guide</h1>
      <p>Find the perfect curtains to match your style and needs with our expert guide.</p>
    </Container>

    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={11} md={10} lg={10} xl={9} xxl={8}>
          <Card className="py-4 px-3">
            <h2>1. Fabric</h2>
            <Card.Img variant="top" src="/images/FabricOptions.jpg" className="rounded-0 mb-3"/>
            <p>Choose the right fabric for your needs:</p>
            <ol type="A">
              <li><strong>Blockout Fabric</strong>
                <ul>
                  <li>Blocks 80% - 100% of light</li>
                  <li>Thick, durable, and long-lasting</li>
                  <li>Creates a dark and peaceful environment</li>
                  <li>Provides privacy, insulation, and sound reduction</li>
                  <li>Ideal for bedrooms, TV rooms, and projector rooms</li>
                  <li>Can be layered with sheer curtains for flexibility</li>
                </ul>
              </li>
              <br></br>
              <li><strong>Room-Darkening Fabric</strong>
                <ul>
                  <li>Block 60% - 80% of light</li>
                  <li>Darkens the room without completely blocking light</li>
                  <li>Creates a cozy and inviting atmosphere</li>
                  <li>Ensures privacy while allowing some light to filter through</li>
                  <li>Suitable for bedrooms, dining rooms, living rooms, and home offices</li>
                  <li>Can be layered with sheer curtains for versatility</li>
                </ul>
              </li>
              <br></br>
              <li><strong>Sheer Fabric</strong>
                <ul>
                  <li>Softly filters natural light</li>
                  <li>Creates an airy and elegant look</li>
                  <li>Provides daytime privacy while maintaining natural light and visibility</li>
                  <li>Reduces glare without darkening the room</li>
                  <li>Ideal for living rooms, dining areas, and layered window treatments</li>
                  <li>Can be paired with blockout or room-darkening curtains for added privacy and light control</li>
                </ul>
              </li>
            </ol> 
            <NavLink to="/products" className="nav-link">
              <Button variant="primary" className='ms-3 my-4' >View Fabrics</Button>
            </NavLink>
          </Card>

          <Card className="py-4 px-3">
            <h2>2. Track or Pole</h2>
            <p>Do you have an existing track or pole? Your track or pole can be either ceiling-mounted or wall-mounted.</p>
            <p>Note: We currently do not sell tracks or poles, so you will need to prepare your own separately.</p>
            <ol type="A">
              <li><strong>Pole only</strong></li>
              <li><strong>Pole with rings</strong></li>
              <li><strong>Track only</strong></li>
              <li><strong>Ripple track (with fixed distance sliders)</strong></li>
            </ol>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>3. Heading Style</h2>
            <Card.Img variant="top" src="/images/HeadingStyle.jpg" className="rounded-0 mb-3"/>
            <ol type="A">
              <li><strong>Triple Pinch Pleat</strong> (Created with metal 4-Prong drapery hooks, suitable for tracks or poles with rings)</li>
              <li><strong>Double Pinch Pleat</strong> (Fixed folds, hung using adjustable plastic hooks, suitable for tracks or poles with rings)</li>
              <li><strong>Eyelets</strong> (for poles only)</li>
              <li><strong>Ripple</strong> (for special ripple tracks only)</li>
            </ol>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>4. Single or Double Panel</h2>
            <ol type="A">
              <li><strong>Single Panel</strong> (Best when there is room on only one side of your window)</li>
              <li><strong>Double Panel</strong> (Ideal when there is room on both sides of your window)</li>
            </ol>             
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>5. Width Options</h2>
            <ol type="A">
              <li><strong>Full wall width</strong> (Ideal when the window spans most of the wall, creating a grand look)</li>
              <li><strong>To either side of the window</strong> (Suitable for smaller windows, ensuring balanced coverage)</li>
            </ol>  
          </Card>
          
          <Card className="py-4 px-3 mt-4">
            <h2>6. Length Options</h2>
            <ol type="A">
              <li>Just touching the <strong>top of the sill</strong></li>
              <li>Just <strong>covering the sill</strong></li>
              <li>Just <strong>above the radiator</strong></li>
              <li>15mm <strong>below the sill</strong></li>
              <li>Just <strong>above the floor (for ease of cleaning)</strong></li>
              <li><strong>Pooling on floor</strong> (for a more luxurious, dramatic effect)</li>
            </ol>
          </Card>

        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Guide;