import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

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
            <h2>1. Choose your Fabric</h2>
            <Card.Img variant="top" src="/images/FabricOptions.jpg" className="rounded-0 mb-3" alt="Fabric Options - Blockout, Room-darkening and Sheer"/>
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
            <Row className="g-0 d-flex flex-column flex-md-row">
              <Col md={6}>
                <Card.Img
                  src="/images/TrackPole-1.jpg"
                  className="rounded-0 img-fluid pe-2"
                  alt="Two Curtain hanging Options - Pole only and pole with rings."
                />
              </Col>
              <Col md={6}>
                <Card.Img
                  src="/images/TrackPole-2.jpg"
                  className="rounded-0 img-fluid pe-2"
                  alt="Two Curtain hanging Options - Standard track and ripple track."
                />
              </Col>
            </Row>

            <ol type="A">
              <li><strong>Pole only</strong></li>
              <li><strong>Pole with rings</strong></li>
              <li><strong>Normal Track (distance between sliders are adjustable)</strong></li>
              <li><strong>Ripple track (with fixed-distance sliders)</strong></li>
            </ol>

            <h3>How to Position a Pole?</h3>
            <Card.Img variant="top" src="/images/PolePosition.jpg" className="rounded-0 mb-3" alt="how to position a curtain pole?"/>
            <ul>
              <li><strong>Position 1:</strong> The pole should be positioned at least 15 cm (6 inches) above the top of the window. Recommended for shorter-length curtains, specifically Length Options 6.A, 6.B, 6.C, and 6.D (shown below).</li>
              <li><strong>Position 2:</strong> The pole should be positioned two-thirds of the way up from the top of the window. Recommended for longer-length curtains, specifically Length Options 6.E and 6.F. (shown below).</li>
            </ul>
            <h3>How to Position a Track?</h3>
            <p>The ideal distance for curtain tracks from the wall depends on the type of curtains and the space needed for smooth movement. Here are some general guidelines:</p>
            <ul>
              <li><strong>Single Curtain Track:</strong> 5-10 cm (2-4 inches) from the wall.</li>
              <li><strong>Double Curtain Track:</strong> 10-15 cm (4-6 inches) from the wall.</li>
              <li><strong>Thick or Blackout Curtains:</strong> 15 cm (6 inches) or more to allow proper stacking.</li>
            </ul>
            <p>If there are window handles or radiators, ensure the track is far enough to prevent obstruction.</p>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>3. Heading Style</h2>
            <Row className="g-0 d-flex flex-column flex-md-row">
              <Col md={6}>
                <Card.Img
                  src="/images/HeadingStyle-1.jpg"
                  className="rounded-0 img-fluid pe-2"
                  alt="2 Curtain Heading Style Options - Triple Pinch Pleat and Double Pinch Pleat"
                />
              </Col>
              <Col md={6}>
                <Card.Img
                  src="/images/HeadingStyle-2.jpg"
                  className="rounded-0 img-fluid pe-2"
                  alt="2 Curtain Heading Style Options - Eyelets and Ripple"
                />
              </Col>
            </Row>
            <ol type="A">
              <li><strong>Triple Pinch Pleat</strong> (Created with metal 4-Prong drapery hooks, suitable for tracks or poles with rings)</li>
              <li><strong>Double Pinch Pleat</strong> (Fixed folds, hung using adjustable plastic hooks, suitable for tracks or poles with rings)</li>
              <li><strong>Eyelets</strong> (for poles only)</li>
              <li><strong>Ripple</strong> (for special ripple tracks only)</li>
            </ol>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>4. Single or Double Panel</h2>
            <Card.Img variant="top" src="/images/SingleDoublePanel.jpg" className="rounded-0 mb-3" alt="Curtain Panel Options - Single or double panel"/>
            <ol type="A">
              <li><strong>Single Panel</strong> (Best when there is room on only one side of your window)</li>
              <li><strong>Double Panel</strong> (Ideal when there is room on both sides of your window)</li>
            </ol>             
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>5. Width Options</h2>
            <Card.Img variant="top" src="/images/WidthOptions.jpg" className="rounded-0 mb-3" alt="Curtain Width Options - Full wall or cover window only"/>
            <ol type="A">
              <li><strong>Full wall width</strong> (Ideal when the window spans most of the wall, creating a grand look)</li>
              <li><strong>Cover window only</strong> (Suitable for smaller windows, ensuring balanced coverage)</li>
            </ol>  
          </Card>
          
          <Card className="py-4 px-3 mt-4">
            <h2>6. Length Options</h2>
            <Card.Img variant="top" src="/images/LengthOptions.jpg" className="rounded-0 mb-3" alt=" Curtain Length Options - 6 length options"/>
            <ol type="A">
              <li>Just touching the <strong>top of the sill</strong></li>
              <li>Just <strong>covering the sill</strong></li>
              <li>Just <strong>above the radiator</strong></li>
              <li>15cm <strong>below the sill</strong></li>
              <li>Just <strong>above the floor (for ease of cleaning)</strong></li>
              <li><strong>Pooling on floor</strong> (for a more luxurious, dramatic effect)</li>
            </ol>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>7. How to measure?</h2>
            <Card.Img variant="top" src="/images/HowToMeasure.jpg" className="rounded-0 mb-3" alt="Measurement instruction"/>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>Tell us your preferences now to get a detailed quote:</h2>
            <p>We typically respond within 24 hours. If you don't see a reply, please check your junk or spam folder. Thank you!</p>

            <Form action="https://getform.io/f/axowwyrb" method="POST">
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">What room/window is this curtain for? (Required):</Form.Label>
                <Form.Control type="text" name="Room" required />
                <Form.Text className="text-muted">For purpose of reference, especially if you are ordering for more than one window.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">1. What Fabric would you like for this room?</Form.Label>
                <Form.Select name="1.fabric" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="1.A. Blockout">1.A. Blockout</option>
                  <option value="1.B. Room-Darkening">1.B. Room-Darkening</option>
                  <option value="1.C. Sheer">1.C. Sheer</option>
                  <option value="1.A & 1.C. Blockout & Sheer">1.A & 1.C Blockout & Sheer</option>
                  <option value="1.B & 1.C. Room-Darkening & Sheer">1.B & 1.C Room-Darkening & Sheer</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">2. Do you have a track or a pole?</Form.Label>
                <Form.Select name="2.Track or Pole" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="None">No, and I would like some advice</option>
                  <option value="2.A. Pole only">2.A. Pole only</option>
                  <option value="2.B. Pole with rings">2.B. Pole with rings</option>
                  <option value="2.C. Standard track">2.C. Standard track</option>
                  <option value="2.D. Ripple track">2.D. Ripple track</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">3. What heading style would you like?</Form.Label>
                <Form.Select name="3.Heading Style" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="3.A. Triple Pinch Pleat">3.A. Triple Pinch Pleat</option>
                  <option value="3.B. Double Pinch Pleat">3.B. Double Pinch Pleat</option>
                  <option value="3.C. Eyelets">3.C. Eyelets</option>
                  <option value="3.D. Ripple">3.D. Ripple</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">4. Single or Double Panel?</Form.Label>
                <Form.Select name="4.Single or Double Panel" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="4.A. Single">4.A. Single</option>
                  <option value="4.B. Double">4.B. Double</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">5. Preferred width coverage?</Form.Label>
                <Form.Select name="5.Width" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="5.A. Full wall width">5.A. Full wall width</option>
                  <option value="5.B. Cover window only">5.B. Cover window only</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">6. Preferred length coverage?</Form.Label>
                <Form.Select name="6.Length" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="6.A. Just touching top of sill">6.A. Just touching top of sill</option>
                  <option value="6.B. Just covering sill">6.B. Just covering sill</option>
                  <option value="6.C. Just above radiator">6.C. Just above radiator</option>
                  <option value="6.D. 15cm below sill">6.D. 15cm below sill</option>
                  <option value="6.E. Just above floor">6.E. Just above floor</option>
                  <option value="6.F. Pooling on floor">6.F. Pooling on floor</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">7.A. Width Measurement (Required):</Form.Label>
                <Form.Control type="text" name="Width" required />
                <Form.Text className="text-muted">See above guide.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">7.B. Length Measurement (Required):</Form.Label>
                <Form.Control type="text" name="Length" required />
                <Form.Text className="text-muted">See above guide.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Do you need us to visit your place for measurements?</Form.Label>
                <Form.Select name="Measurement?" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Do you need us to do the installation?</Form.Label>
                <Form.Select name="Installation?" required>
                  <option value="" disabled selected>Select an option (Required)</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Postcode (Required):</Form.Label>
                <Form.Control type="text" name="Postcode" required />
                <Form.Text className="text-muted">For measurement, installation or delivery.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Name (Required):</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email Address (Required):</Form.Label>
                <Form.Control type="email" name="email" aria-describedby="emailHelp" required />
                <Form.Text className="text-muted">We'll never share your email.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Message (Optional):</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Card>

          <Card className="py-4 px-3 mt-4">
            <h2>This is too much to handle?</h2>
            <p>No worries! We can come to your place to help you decide and measure! </p>
            <NavLink to="/contact" className="nav-link">
              <Button variant="primary">Book a Visit</Button>
            </NavLink>
          </Card>

        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Guide;