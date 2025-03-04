import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "../style/About.css"
import "../style/Global.css"

function About() {
  return (
  <>
    <Container fluid className="genericHero aboutImg d-flex flex-column justify-content-center align-items-center text-center">
      <h1>About Us</h1>
      <p>Just a little bit about our background.</p>
    </Container>

    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col lg={5} md={8} sm={11}>
          <Card className="text-center py-4">
            <h2>Who are we?</h2>
            <p>We are architects couple who share a deep passion for design and creating beautiful spaces. Our journey started with a love for minimalism and modern aesthetics, but also designs that respect historic spaces. Over the years, our fascination with colours, textures, and fabrics led us to the world of curtains—where functionality meets artistry.</p>
            <p>We believe that curtains are more than just window coverings; they bring warmth, personality, and character to a space. We take the time to understand your style, your needs, and the atmosphere you want to create. Whether you desire a soft, airy look or bold statement drapes, we're here to guide you in choosing the perfect fabric and design tailored just for you. </p>
            <p>Our goal is to help you craft a home that feels truly yours—one curtain at a time. </p>
          </Card>

          <Card className="text-center py-4">
            <h2>Speak with us about your needs!</h2>
            <p>We usually respond within just a few hours, and always within 24 hours!</p>
               <NavLink to="/renzenshop/contact" className="nav-link">
                <Button variant="primary">Contact Us</Button>
              </NavLink>
          </Card>

          <Card className="text-center py-4">
            <h2>Connect With Us</h2>
            <p>Follow us on social media for updates and promotions:</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              <a href="https://www.instagram.com/renzenshop/" className="custom-link d-flex gap-1 py-1" target="blank">
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href="https://www.facebook.com/people/RenZen-Shop/61550549634449/" target="blank" className="custom-link d-flex gap-1 py-1">
                <i className="bi bi-facebook"></i> Facebook
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default About;