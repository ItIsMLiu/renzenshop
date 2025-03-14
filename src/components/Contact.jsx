import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import "../style/Contact.css"
import "../style/Global.css"

function Contact() {
  return (
  <>
    <Container fluid className="genericHero contactImg d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.</p>
    </Container>

    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col lg={5} md={8} sm={11}>
          {/* Contact Form */}
          <Card className="py-4 px-3">
            <h2>Contact Form</h2>
            <p>We typically respond within 24 hours. If you don't see a reply, please check your junk or spam folder. Thank you!</p>

            <Form action="https://getform.io/f/axowwyrb" method="POST" enctype="multipart/form-data">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  className='contactInputBox'
                  placeholder="name"
                  name="Name"
                  required
                  style={{ height: '60px' }}
                />
                <label htmlFor="floatingInputCustom">Name:</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  className='contactInputBox'
                  name="Email"
                  required
                  style={{ height: '60px' }}
                />
                <label htmlFor="floatingInputCustom">Email address:</label>
                <Form.Text className="text-muted">We'll never share your email.</Form.Text>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  className='contactInputBox'
                  as="textarea"
                  placeholder="Message"
                  name="Message"
                  required
                  style={{ height: '200px' }}
                />
                <label htmlFor="floatingInputCustom">Message:</label>
              </Form.Floating>

              <Form.Group className="mb-3">
                <Form.Label>Optional - upload photos of your windows:</Form.Label>
                <Form.Control className='contactInputBox' type="file" name="Photos" multiple/>
              </Form.Group>

              <Button variant="primary" type="submit">Send</Button>
            </Form>
          </Card>

          {/* Get in Touch */}
          <Card className="py-4 px-3 mt-4">
            <h2>Get in Touch</h2>
            <p>Based in Bristol, we serve nearby cities, including Cardiff and Bath. Curtain samples are available during scheduled appointments.</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="mailto:renzenshop@outlook.com" className="custom-link d-flex gap-1 py-1">
                <i className="bi bi-envelope"></i> renzenshop@outlook.com
              </a>
              <a href="https://wa.me/+447759721379?text=Hello%2C%20I%20need%20assistance%20with%20choosing%20new%20curtains" target="blank" className="custom-link d-flex gap-1 py-1">
                <i className="bi bi-whatsapp"></i> WhatsApp Chat
              </a>
              {/*
              <a href="tel: 07759721379" target="blank" className="custom-link d-flex gap-1 py-1">
                <i className="bi bi-phone"></i> 07759721379
              </a>
              */}
              <a href="https://www.google.com/maps/place/Bristol/@51.4683734,-2.7555235,11z/data=!3m1!4b1!4m6!3m5!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!8m2!3d51.454513!4d-2.58791!16zL20vMDk1bDA?entry=ttu" target="blank" className="custom-link d-flex gap-1 py-1">
                <i className="bi bi-geo-alt"></i> Bristol, UK
              </a>
            </div>
          </Card>

          {/* Social Media */}
          <Card className="py-4 px-3 mt-4">
            <h2>Connect With Us</h2>
            <p>Follow us for updates and promotions:</p>

            <div className="d-flex flex-column flex-sm-row gap-3">
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

export default Contact;