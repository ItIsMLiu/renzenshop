import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Form, Button, Alert } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export const QuoteForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const form = useRef();

  const sendQuoteForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_an1e69v', 'template_bcxvz56', form.current, {
        publicKey: 'Vu4GDOi3My65X-h_b',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <Form ref={form} onSubmit={sendQuoteForm} className='guideForm pb-5 px-sm-3 px-md-5'>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">What room/window is this curtain for? </Form.Label>
            <Form.Control className='guideInputBox' type="text" name="Room" required placeholder="(Required)"/>
            <Form.Text className=" text-muted">For purpose of reference, especially if you are ordering for more than one window.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">1. What fabric would you like for this room?</Form.Label>
            <Form.Select className='guideSelectBox' name="1 Fabric" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="1.A. Blockout">1.A. Blockout</option>
              <option value="1.B. Room-Darkening">1.B. Room-Darkening</option>
              <option value="1.C. Sheer">1.C. Sheer</option>
              <option value="1.A & 1.C. Blockout & Sheer">1.A & 1.C Blockout & Sheer</option>
              <option value="1.B & 1.C. Room-Darkening & Sheer">1.B & 1.C Room-Darkening & Sheer</option>
            </Form.Select>
            <Form.Label className="fw-bold">Chosen product name and colour: </Form.Label>
            <Form.Control className='guideInputBox' type="text" name="Product Name & Colour" required placeholder="(Required)"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">2. Do you have a track or a pole?</Form.Label>
            <Form.Select className='guideSelectBox' name="2 Track or Pole" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="None & advice">No, and I would like some advice</option>
              <option value="2.A. Pole only">2.A. Pole only</option>
              <option value="2.B. Pole with rings">2.B. Pole with rings</option>
              <option value="2.C. Standard track">2.C. Standard track</option>
              <option value="2.D. Ripple track">2.D. Ripple track</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">3. What heading style would you like?</Form.Label>
            <Form.Select className='guideSelectBox' name="3 Heading Style" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="3.A. Triple Pinch Pleat">3.A. Triple Pinch Pleat</option>
              <option value="3.B. Double Pinch Pleat">3.B. Double Pinch Pleat</option>
              <option value="3.C. Eyelets">3.C. Eyelets</option>
              <option value="3.D. Ripple">3.D. Ripple</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">4. Single or double panel?</Form.Label>
            <Form.Select className='guideSelectBox' name="4 Single or Double Panel" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="4.A. Single">4.A. Single</option>
              <option value="4.B. Double">4.B. Double</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">5. Preferred width coverage?</Form.Label>
            <Form.Select className='guideSelectBox' name="5 Width" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="5.A. Full wall width">5.A. Full wall width</option>
              <option value="5.B. Cover window only">5.B. Cover window only</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">6. Preferred length coverage?</Form.Label>
            <Form.Select className='guideSelectBox' name="6 Length" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="6.A. 1cm above of sill">6.A. Drop to Sill (1cm above of sill)</option>
              <option value="6.B. 1cm below the sill">6.B. Drop at Sill (1cm below sill)</option>
              <option value="6.C. 1cm above radiator">6.C. Drop to Radiator (1cm above radiator)</option>
              <option value="6.D. 15cm below sill">6.D. Drop Below Sill (15cm below sill)</option>
              <option value="6.E. 1cm above floor">6.E. Drop to Floor (1cm above floor)</option>
              <option value="6.F. Pooling on floor">6.F. Pooling on floor (adding 10-15cm)</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">7.A. Pole length or track length measurement (in centimeter): </Form.Label>
            <Form.Control className='guideInputBox' type="text" name="7A Width" required placeholder="(Required)"/>
            <Form.Text className=" text-muted">See above guide.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">7.B. Curtain length measurement (in centimeter):</Form.Label>
            <Form.Control className='guideInputBox' type="text" name="7B Length" required placeholder="(Required)"/>
            <Form.Text className=" text-muted">See above guide.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Do you need us to visit your place for measurements?</Form.Label>
            <Form.Select className='guideSelectBox' name="Measurement" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Do you need us to do the installation?</Form.Label>
            <Form.Select className='guideSelectBox' name="Installation" required>
              <option value="" disabled selected>Select an option (Required)</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Postcode: </Form.Label>
            <Form.Control className='guideInputBox' type="text" name="Postcode" required placeholder="(Required)"/>
            <Form.Text className="text-muted">For measurement, installation or delivery.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Name: </Form.Label>
            <Form.Control className='guideInputBox' type="text" name="Name" required placeholder="(Required)"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Email Address: </Form.Label>
            <Form.Control className='guideInputBox' type="email" name="Email" aria-describedby="emailHelp" required placeholder="(Required)"/>
            <Form.Text className="text-muted">We'll never share your email.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Message:</Form.Label>
            <Form.Control className='guideInputBox' as="textarea" name="Message" rows={3} placeholder="(Optional)"/>
          </Form.Group>

          <Button variant="primary" type="submit" value="Send">Submit</Button>
        </Form>
      ) : (
        <>
          <Alert variant="success" className="rounded-0 text-center">✔ Thank you! Your form has been Submitted.</Alert>
          <Button
            variant="primary"
            onClick={() => {
              if (window.location.href.includes("#quoteForm")) {
                window.location.reload(); // Force a full page reload
              } else {
                window.location.href = "/Guide#quoteForm";
              }
            }}
          >
            Submit another form for a different window
          </Button>
        </>
      )}
    </>
  );
};