import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Form, Button, Alert } from "react-bootstrap";

export const EmailForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_an1e69v', 'template_r9cr1wd', form.current, {
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
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    className='contactInputBox'
                    placeholder="name"
                    name="name"
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
                    name="email"
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
                    name="message"
                    required
                    style={{ height: '200px' }}
                    />
                    <label htmlFor="floatingInputCustom">Message:</label>
                </Form.Floating>

                <Button variant="primary" type="submit" value="Send">Send</Button>
            </Form>
        ) : (
            <Alert variant="success" className="rounded-0">✔ Thank you! Your message has been sent.</Alert>
        )}
    </>
  );
};